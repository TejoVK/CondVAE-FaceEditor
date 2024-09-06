# CVAE Face Editor Project

This project implements a **Conditional Variational Autoencoder (CVAE)** using the **CelebA dataset** to create a face editor. The project includes both a frontend (deployed on Vercel) and a backend (deployed on Hugging Face Spaces).

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Backend](#backend-setup)
  - [Frontend](#frontend-setup)
- [Deployment](#deployment)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project implements a **Conditional Variational Autoencoder (CVAE)** to perform facial feature editing using the **CelebA dataset**. Users can conditionally modify features like hair color, glasses, etc., through the interface provided on the frontend.

The project consists of two parts:
- **Frontend**: A React.js application deployed on Vercel that provides an interactive UI for facial editing.
- **Backend**: A Flask API (deployed on Hugging Face) for handling model inference, built with PyTorch.

### Live Demo

- **Frontend**: [cond-vae-face-editor on Vercel](https://cond-vae-face-editor-cvyv.vercel.app/)
- **Backend**: Hosted on Hugging Face Spaces. [tejovk311/cvae_face_editor](https://huggingface.co/spaces/tejovk311/cvae_face_editor/tree/main)

### Model Architecture

The CVAE architecture consists of:
- **Encoder**: Takes input facial images and encodes them into a latent space.
- **Reparameterization**: Samples latent vectors using the latent space mean and log variance.
- **Decoder**: Reconstructs images conditioned on the latent vectors and additional feature inputs.

The model is trained on the **CelebA dataset**, which contains celebrity images with annotations on facial features.

## Features

- **Facial Feature Editing**: Change attributes such as hair color, smile, glasses, etc.
- **Conditional Sampling**: Generate images with specific facial features.
- **Real-time Image Reconstruction**: View reconstructed images on the frontend after editing.

## Technologies Used

### Frontend:
- React.js
- HTML5/CSS3
- JavaScript (ES6+)
- Deployed on **Vercel**

### Backend:
- Flask (Python)
- PyTorch (for model inference)
- TorchVision (for image processing)
- CelebA dataset
- Deployed on **Hugging Face Spaces**


## Installation

### Backend Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/cvae-project.git
    cd cvae-project/backend
    ```

2. **Set up a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. **Install the Python dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the Flask backend**:
    ```bash
    flask run
    ```

    The backend will run at `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd cvae-project/frontend
    ```

2. **Install the frontend dependencies**:
    ```bash
    npm install
    ```

3. **Run the React frontend**:
    ```bash
    npm start
    ```

    The frontend will run at `http://localhost:3000`.

## Deployment

### Backend

The backend has been deployed on **Hugging Face Spaces**. If you want to deploy the backend yourself, follow these steps:

1. Make sure your `requirements.txt` file includes the dependencies needed for Hugging Face Spaces (Flask, Pyask, PyTorch, etc.).

2. Push the backend code to Hugging Face using the following steps:

    - Create a Hugging Face account (if you don't have one).
    - Go to the **Spaces** section and create a new Space.
    - Choose **Python** as the environment type.
    - Upload your backend code, making sure the `app.py` is the entry point.
    - Once your space is created and the code is pushed, the backend will automatically build and deploy.

    You can view the Hugging Face Space URL in the project settings for access.

### Frontend

The frontend has been deployed on **Vercel**. To deploy the frontend yourself:

1. **Vercel Setup**:
    - Create a Vercel account (if you don't have one).
    - Link your GitHub repository with Vercel.
    - Choose the frontend directory (`/frontend`) as the root for deployment.

2. **Configure environment variables**:
    - If your frontend requires any API keys or backend URLs, add them to your Vercel project environment settings.

3. **Deploy**:
    - Vercel will automatically build and deploy the frontend when changes are pushed to the main branch.

You can view the live demo [here](https://cond-vae-face-editor-cvyv.vercel.app/).

## Running the Project

To run the project locally:

1. **Start the backend**:
    ```bash
    cd backend
    flask run
    ```

2. **Start the frontend**:
    ```bash
    cd frontend
    npm start
    ```

Now you can access the app at `http://localhost:3000` and test it with the local backend running at `http://localhost:5000`.

## Contributing

Contributions are welcome! If you'd like to contribute, follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding standards and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



