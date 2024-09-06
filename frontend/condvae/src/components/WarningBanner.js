import React, { useState } from 'react';
import '../styles/WarningBanner.css'; // Ensure to import the CSS

const WarningBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const closeBanner = () => {
    setShowBanner(false);
  };

  if (!showBanner) return null; // If the banner is dismissed, don't show it

  return (
    <div className="warning-banner">
      <p>The model was trained on the CelebA dataset and not on real-life images. Therefore, if you upload your own images, the model might not perform well. For best results, use images from the CelebA dataset.
      </p>
      <button className="close-btn" onClick={closeBanner}>X</button>
    </div>
  );
};

export default WarningBanner;
