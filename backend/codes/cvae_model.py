from flask import Flask, request, jsonify
from PIL import Image
import torch
from torchvision import transforms
import io
import base64
import torch.nn as nn
import torch.nn.functional as F
import json
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)
# Define the CVAE class
class CVAE(nn.Module):
    def __init__(self, input_shape, num_features, latent_dim):
        super(CVAE, self).__init__()
        self.input_shape = input_shape
        self.num_features = num_features
        self.latent_dim = latent_dim

        # Encoder
        self.conv1 = nn.Conv2d(input_shape[0], 32, kernel_size=4, stride=2, padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=4, stride=2, padding=1)
        self.conv3 = nn.Conv2d(64, 128, kernel_size=4, stride=2, padding=1)
        self.fc1 = nn.Linear(128 * 27 * 22, 512)
        self.fc2_mu = nn.Linear(512, latent_dim)
        self.fc2_logvar = nn.Linear(512, latent_dim)

        # Decoder
        self.fc3 = nn.Linear(latent_dim + num_features, 512)
        self.fc4 = nn.Linear(512, 128 * 27 * 22)
        self.deconv1 = nn.ConvTranspose2d(128, 64, kernel_size=4, stride=2, padding=1)
        self.deconv2 = nn.ConvTranspose2d(64, 32, kernel_size=4, stride=2, padding=1)
        self.deconv3 = nn.ConvTranspose2d(32, input_shape[0], kernel_size=4, stride=2, padding=1)

    def encode(self, x, features):
        x = F.relu(self.conv1(x))
        x = F.relu(self.conv2(x))
        x = F.relu(self.conv3(x))
        x = x.view(x.size(0), -1)  # Flatten the tensor
        x = F.relu(self.fc1(x))
        mu = self.fc2_mu(x)
        logvar = self.fc2_logvar(x)
        return mu, logvar

    def reparameterize(self, mu, logvar):
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std

    def decode(self, z, features):
        x = torch.cat([z, features], dim=1)
        x = F.relu(self.fc3(x))
        x = F.relu(self.fc4(x))
        x = x.view(x.size(0), 128, 27, 22)  # Reshape to (batch_size, 128, 27, 22)
        x = F.relu(self.deconv1(x))
        x = F.relu(self.deconv2(x))
        x = torch.sigmoid(self.deconv3(x))  # Use sigmoid for the output layer
        return x

    def forward(self, x, features):
        mu, logvar = self.encode(x, features)
        z = self.reparameterize(mu, logvar)
        recon_x = self.decode(z, features)
        return recon_x, mu, logvar


# Define image transformation
transform = transforms.Compose([
    transforms.Resize((218, 178)),
    transforms.ToTensor(),
])

# Load the trained model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = torch.load('../model/cvae_model_entir.pth', map_location=device)
model.eval()  # Set the model to evaluation mode
model = model.to(device)  # Move to GPU or CPU

def process_image(image_bytes, conditions):
    # Load and preprocess the image
    image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    image = transform(image).unsqueeze(0).to(device)  # Add batch dimension and move to GPU/CPU

    # Convert conditions to tensor
    condition_tensor = torch.tensor(conditions, dtype=torch.float32).unsqueeze(0).to(device)

    # Perform inference
    with torch.no_grad():
        recon_image, _, _ = model(image, condition_tensor)

    # Convert tensor to image
    recon_image = recon_image.squeeze().cpu()  # Remove batch dimension and move to CPU
    recon_image = transforms.ToPILImage()(recon_image)

    # Convert the image to a base64 string
    buffered = io.BytesIO()
    recon_image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

    return img_str

@app.route('/process', methods=['POST'])
def process():
    try:
        # Get the image and conditions from the request
        image = request.files.get('image')
        conditions = request.form.get('conditions')

        # Check if the image and conditions are provided
        if image is None or conditions is None:
            return jsonify({'error': 'Image or conditions not provided'}), 400

        # Convert conditions from JSON string to list
        conditions = json.loads(conditions)

        # Process the image
        image_bytes = image.read()
        result_image_str = process_image(image_bytes, conditions)

        # Return the processed image as a base64 string
        return jsonify({'reconstructed_image': result_image_str})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
