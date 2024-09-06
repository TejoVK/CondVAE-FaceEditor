import React from 'react';
import '../styles/CVAEArchitecture.css';  // Import the CSS file
import NavbarComponent from './NavbarComponent';

const CVAEArchitecture = () => {
  return (
    <>
    <NavbarComponent/>
    <div className="cvae-container">
      <h1 className="cvae-title">Conditional Variational Autoencoder (CVAE) Architecture</h1>

      <section className="cvae-section">
        <h2>1. Model Components</h2>
        <p>
          The CVAE consists of three primary parts:
          <ul>
            <li><strong>Encoder:</strong> Maps input images to a latent space representation.</li>
            <li><strong>Latent Space:</strong> A probabilistic representation that captures essential features.</li>
            <li><strong>Decoder:</strong> Reconstructs the input image from the latent space and conditional features.</li>
          </ul>
        </p>
      </section>

      <section className="cvae-section">
        <h2>2. Encoder</h2>
        <p>
          The encoder compresses the input image into a latent space. It includes convolutional layers that extract spatial features from the input image, followed by fully connected layers that predict the mean (<em>mu</em>) and variance (<em>logvar</em>) of the latent space distribution.
        </p>
        <h3>Convolutional Layers:</h3>
        <pre className="cvae-code">
          self.conv1 = nn.Conv2d(input_shape[0], 32, kernel_size=4, stride=2, padding=1)
          self.conv2 = nn.Conv2d(32, 64, kernel_size=4, stride=2, padding=1)
          self.conv3 = nn.Conv2d(64, 128, kernel_size=4, stride=2, padding=1)
        </pre>

        <h3>Fully Connected Layers:</h3>
        <pre className="cvae-code">
          self.fc1 = nn.Linear(128 * 27 * 22, 512)
          self.fc2_mu = nn.Linear(512, latent_dim)
          self.fc2_logvar = nn.Linear(512, latent_dim)
        </pre>
      </section>

      <section className="cvae-section">
        <h2>3. Latent Space Representation and Reparameterization</h2>
        <p>
          The encoder maps the input image to a distribution (mean and variance). The CVAE uses the <strong>reparameterization trick</strong>:
        </p>
        <pre className="cvae-code">
          z = mu + sigma * epsilon
        </pre>
        <p>
          where <em>z</em> is the latent vector, <em>mu</em> is the mean, <em>sigma</em> is the standard deviation, and <em>epsilon</em> is a random variable sampled from a normal distribution.
        </p>
      </section>

      <section className="cvae-section">
        <h2>4. Decoder</h2>
        <p>
          The decoder reconstructs the image from the latent vector and conditional features. It takes the concatenated latent vector and the condition (e.g., features) as input.
        </p>
        <h3>Fully Connected Layers:</h3>
        <pre className="cvae-code">
          self.fc3 = nn.Linear(latent_dim + num_features, 512)
          self.fc4 = nn.Linear(512, 128 * 27 * 22)
        </pre>

        <h3>Transpose Convolutional Layers:</h3>
        <pre className="cvae-code">
          self.deconv1 = nn.ConvTranspose2d(128, 64, kernel_size=4, stride=2, padding=1)
          self.deconv2 = nn.ConvTranspose2d(64, 32, kernel_size=4, stride=2, padding=1)
          self.deconv3 = nn.ConvTranspose2d(32, input_shape[0], kernel_size=4, stride=2, padding=1)
        </pre>
      </section>

      <section className="cvae-section">
        <h2>5. Loss Function</h2>
        <p>
          The CVAE optimizes two losses:
          <ul>
            <li><strong>Binary Cross Entropy (BCE):</strong> Measures reconstruction accuracy between input and output.</li>
            <li><strong>Kullback-Leibler Divergence (KLD):</strong> Regularizes the latent space by making the learned distribution similar to a standard normal distribution.</li>
          </ul>
        </p>
        <pre className="cvae-code">
          BCE = nn.functional.binary_cross_entropy(recon_x, x, reduction='sum')
          KLD = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
          return BCE + KLD
        </pre>
      </section>

      <section className="cvae-summary">
        <h2>6. Summary</h2>
        <p>
          The CVAE allows controlled generation of data by conditioning on specific features. It balances reconstruction quality and latent space regularization, making it a powerful generative model for complex tasks.
        </p>
      </section>
    </div>
    </>
  );
};

export default CVAEArchitecture;
