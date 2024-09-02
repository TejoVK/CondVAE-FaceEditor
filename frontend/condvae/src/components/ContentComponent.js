import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud } from 'lucide-react';

function ContentComponent() {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/reconstruct'); // Redirect to the /reconstruct route
  };

  return (
    <div className="text-center mt-12">
      <p className="mx-auto max-w-3xl">
        Welcome to CondVAE-FaceEditor! This tool allows you to explore the capabilities of conditional variational autoencoders
        in editing and generating facial features. Dive in to learn more about the model architecture and how CVAE can be
        applied to various tasks.
      </p>
      <div className="flex justify-center mt-6">
        <button className="flex items-center justify-center px-4 py-2 bg-[#8A70D6] text-white rounded-full font-semibold text-sm hover:bg-[#7860C4] transition-colors duration-300"
        onClick={handleRedirect}>
          <Cloud className="w-10 h-10 mr-2" />
          Edit Face Now
        </button>
      </div>
    </div>
  );
}

export default ContentComponent;
