import React from 'react';
import '../styles/FeatureCard.css';

const FeatureCard = ({ title, description, mainImage, thumbnailImage }) => {
  return (
    <div className="feature-card">
      <div className="relative">
        <img className="w-full" src={mainImage} alt={title} />
        <img 
          className="thumbnail-image" 
          src={thumbnailImage} 
          alt="Thumbnail" 
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
