import React, { useState } from 'react';
import './ImageWithButton.css';

const ImageWithButton = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  // Define image sets for each button
  const galleries = {
    gallery1: [
      './Red-Fort.webp',
      './Manali.webp',
      './Agra.webp',
      './Shimla.webp',
      './Mussoorie.webp',
      './Khajjiar.webp',
      './Jim-Corbett.webp',
      './JallianwalaB.webp',
      
    ],
    gallery2: [
      './Kaziranga.webp',
      './Tsomgo-Lake.webp',
      './Ziro-Valley.webp',
      './Goechala.webp',
      './Cherrapunji.webp',
      './Pelling.webp',
      './Gangtok.webp',
      './Gorichen-Peak.webp',
      
    ],
    gallery3: [
      './Goa.webp',
      './Mumbai.webp',
      './mahab.webp',
      './Panghana.webp',
      './Cherrapunji.webp',
      './Pelling.webp',
      './Gangtok.webp',
      './Gorichen-Peak.webp',
    ],
    gallery4: [
      './Bangalore.webp',
      './Coorg.webp',
      './Chennai.webp',
      './Gokarna.webp',
      './Cherrapunji.webp',
      './Pelling.webp',
      './Gangtok.webp',
      './Gorichen-Peak.webp',
    ],
  };

  const handleButtonClick = (gallery) => {
    setSelectedGallery(gallery);
  };

  return (
    <div className="gallery-container">
      <div className="button-row">
        <a href="#gallery1" className="button" onClick={() => handleButtonClick('gallery1')}>NORTH INDIA</a>
        <a href="#gallery2" className="button" onClick={() => handleButtonClick('gallery2')}>EAST INDIA</a>
        <a href="#gallery3" className="button" onClick={() => handleButtonClick('gallery3')}>WEST INDIA</a>
        <a href="#gallery4" className="button" onClick={() => handleButtonClick('gallery4')}>SOUTH INDIA</a>
      </div>

      <div className="image-gallery">
        {selectedGallery && galleries[selectedGallery].map((imageSrc, index) => (
          <div className="image-item" key={index}>
            <img src={imageSrc} alt={`Gallery ${selectedGallery} Image ${index + 1}`} />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageWithButton;
