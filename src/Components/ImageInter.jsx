import React from 'react';
import './ImageInter.css';

const ImageInter = () => {
  return (
    <div className="image-layout">
      <div className="left-image-container">
        <img src="./DUBAI1.webp" alt="Left Image" className="left-image" />
        <div className="image-label">Dubai</div>
      </div>
      <div className="right-image-container">
        <div className="right-image">
          <img src="./Gangtok.webp" alt="Right Image 1" />
          <div className="image-label">Gangtok</div>
        </div>
        <div className="right-image">
          <img src="caption.webp" alt="Right Image 2" />
          <div className="image-label">Singapur</div>
        </div>
      </div>
      
    </div>
  );
};

export default ImageInter;
