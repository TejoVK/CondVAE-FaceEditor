import '../styles/ImageUploader.css'; // Import the CSS file
// import React, { useState } from 'react';
// import axios from 'axios';

// const ImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const [conditions, setConditions] = useState([1, 0, 1, 1, 1, 0, 1, 0, 1, 0]); // Example conditions
//   const [loading, setLoading] = useState(false);
//   const [resultImage, setResultImage] = useState(null);
//   const [error, setError] = useState(null);

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleConditionsChange = (e) => {
//     setConditions(e.target.value.split(',').map(Number)); // Example: "1,0,1,1,1,0,1,0,1,0"
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setResultImage(null);

//     const formData = new FormData();
//     formData.append('image', image);
//     formData.append('conditions', JSON.stringify(conditions));

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/process', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.status === 200) {
//         const { reconstructed_image } = response.data;
//         setResultImage(`data:image/png;base64,${reconstructed_image}`);
//       } else {
//         setError('Error processing the image');
//       }
//     } catch (err) {
//       setError(`Error: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="containerrr">
//       <h1>Image Upload and Processing</h1>
//       <form onSubmit={handleSubmit} className="form">
//         <input type="file" accept="image/*" onChange={handleImageChange} required className="input-file" />
//         <input type="text" value={conditions.join(',')} onChange={handleConditionsChange} placeholder="Enter conditions separated by commas" required className="input-text" />
//         <button type="submit" disabled={loading} className="submit-button">
//           {loading ? 'Processing...' : 'Upload Image'}
//         </button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//       {resultImage && <img src={resultImage} alt="Reconstructed" className="result-image" />}
//     </div>
//   );
// };

// export default ImageUpload;
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [conditions, setConditions] = useState([1, 0, 1, 1, 1, 0, 1, 0, 1, 0]); // Example conditions
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleConditionsChange = (e) => {
    setConditions(e.target.value.split(',').map(Number)); // Example: "1,0,1,1,1,0,1,0,1,0"
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
      const response = await axios.post('http://localhost:5000/process', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
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

  return (
    <div className="image-upload-container-wrapper">
      <div className="image-upload-container">
        <h1 className="image-upload-title">Image Upload & Reconstruction</h1>
        <form onSubmit={handleSubmit} className="image-upload-form">
          <input type="file" accept="image/*" onChange={handleImageChange} required className="image-upload-input-file"/>
          <input type="text" value={conditions.join(',')} onChange={handleConditionsChange} placeholder="Enter conditions separated by commas" required className="image-upload-input-text"/>
          <button type="submit" disabled={loading} className="image-upload-button">
            {loading ? 'Processing...' : 'Upload Image'}
          </button>
        </form>
        {error && <p className="image-upload-error">{error}</p>}
        {image && resultImage && (
          <div className="image-upload-images">
            <div className="image-upload-image-wrapper">
              <h3>Original Image</h3>
              <img src={URL.createObjectURL(image)} alt="Original" className="image-upload-image"/>
            </div>
            <div className="image-upload-image-wrapper">
              <h3>Reconstructed Image</h3>
              <img src={resultImage} alt="Reconstructed" className="image-upload-image"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;