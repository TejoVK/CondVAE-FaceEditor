import '../styles/ImageUploader.css'; // Import the CSS file
import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form'; // Import Bootstrap Form for Switches
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded
import NavbarComponent from './NavbarComponent';

const ImageUpload = () => {
  const [conditions, setConditions] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSwitchChange = (index) => {
    const updatedConditions = [...conditions];
    updatedConditions[index] = updatedConditions[index] === 1 ? 0 : 1;
    setConditions(updatedConditions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResultImage(null);

    const formData = new FormData();
    formData.append('image', image);
    formData.append('conditions', JSON.stringify(conditions));

    try {
      const response = await axios.post('https://tejovk311-cvae-face-editor.hf.space/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        const { reconstructed_image } = response.data;
        setResultImage(`data:image/png;base64,${reconstructed_image}`);
      } else {
        setError('Error processing the image');
      }
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Example labels for facial features (modify as needed)
  const featureLabels = ['Attractive', 'Make Bald', 'Smiling', 'Apply Lipstick', 'Make Young', 'Add Eyeglasses', 'Apply Makeup', 'Add Mustache', 'Remove Facial Hair', 'Receding Hairline'];

  return (
    <>
    <NavbarComponent/>
    <div className="image-upload-container-wrapper">
      <div className="image-upload-container">
        <h1 className="image-upload-title">Image Upload & Reconstruction</h1>
        <form onSubmit={handleSubmit} className="image-upload-form">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="image-upload-input-file"
          />

          {/* Switches for toggling facial features */}
          <div className="image-upload-switches">
            <div className="container">
              <div className="row">
                {featureLabels.map((label, index) => (
                  <div key={index} className="col-6 col-md-4 col-lg-3 mb-3">
                    <Form.Check
                      type="switch"
                      id={`feature-switch-${index}`}
                      label={label}
                      checked={conditions[index] === 1}
                      onChange={() => handleSwitchChange(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="image-upload-button"
          >
            {loading ? 'Processing...' : 'Upload Image'}
          </button>
        </form>

        {error && <p className="image-upload-error">{error}</p>}

        {/* Display original and reconstructed images */}
        {image && resultImage && (
          <div className="image-upload-images">
            <div className="image-upload-image-wrapper">
              <h3>Original Image</h3>
              <br />
              <img
                src={URL.createObjectURL(image)}
                alt="Original"
                className="image-upload-image"
              />
            </div>
            <div className="image-upload-image-wrapper">
              <h3>Reconstructed Image</h3>
              <br />
              <img
                src={resultImage}
                alt="Reconstructed"
                className="image-upload-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ImageUpload;
