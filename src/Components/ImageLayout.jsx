import React from 'react';
import './ImageLayout.css';
import International from './International';

function ImageLayout() {
  return (
    <>
    <div className="image-layout">
     
      <div className="left-image-container">
        <img src="./Jallianwala.webp" alt="Jallianwala Bagh" className="left-image" />
        <div className="image-label">Jallianwala Bagh</div>
      </div>
      
      
      <div className="right-image-container">
        <div className="right-image">
          <img src="./Sikkim.png" alt="Sikkim" />
          <div className="image-label">Sikkim</div>
        </div>
        <div className="right-image">
          <img src="./Taj-mahal.webp" alt="Taj Mahal" />
          <div className="image-label">Taj Mahal</div>
        </div>
      </div>
    </div>
    
    </>
    
  );
}

export default ImageLayout;
