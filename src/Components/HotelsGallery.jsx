import React from 'react';
import './ImageGallery.css';

const HotelsGallery = () => {
  return (
    <div className="image-gallery">
      <div className="image-item">
        <img src="./Hotel1.webp" alt="Leh" />
        <div className="description">
        <a href="#"> <h3>Taj Aravali Resort & Spa</h3> </a><p>Prices for Taj Aravali Resort and Spa one of the best hotels in India, starts at ₹ 12999+ per night</p></div>
      </div>
      <div className="image-item">
        <img src="./Hotel2.webp" alt="Solang Valley" />
        <div className="description">
        <a href="#"> <h3>Hideout Premiere</h3> </a>
        
            <p>Hideout Resorts is a collection of elegantly designed hotels and resorts in Goa that aim to give our guests the opportunity to enjoy Goa in all her glory. Whether it’s the beaches ₹ 4499+</p>
            <a href="#"> <h3>Contact</h3> </a></div>
      </div>
      <div className="image-item">
        <img src="./Hotel3.webp" alt="Image 3" />
      
        <a href="#"> <h3>
        Hotel Mountain face by Snow City Hotels</h3> </a>
        <div className="description">Set in Manāli Hotel Mountain face by Snow City Hotels offers accommodation with a restaurant, free private parking, a shared lounge and a garden.₹ 1,440+ per night</div>
      </div>

      <div className="image-item">
        <img src="./Hotel4.webp" alt="Image 3" />
      
        <a href="#"> <h3>The Taj Hotel</h3> </a>
        <div className="description">
            <p>Taj Hotels is a chain of luxury hotels and a subsidiary of the Indian Hotels Company Limited,[1] headquartered in Mumbai, India. </p>
            <a href="#"><h3>Contact</h3> </a>
        </div>
      </div>
    </div>
  );
};

export default HotelsGallery;
