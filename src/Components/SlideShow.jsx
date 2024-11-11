import React, { useState } from 'react';
import './Slideshow.css';

const images = [
  { src: './Delhi.png', title: 'New Delhi, NCR' },
  { src: './Taj-mahal.webp', title: 'Agra, Taj Mahal' },
  { src: './jaipur.png', title: 'Jaipur, Amber Fort' },
  { src: './Darjeeling.png', title: 'Darjeeling,Tea ' },
  { src: './Mumbai.webp', title: 'Mumbai, GateWay of India' },
  // Add more images and titles as needed
];

function Slideshow() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <>
    <div >
        
    <div className="slideshow">
   
      <div className="image-container">
      <h1>Welcome to Jingle Bazaar Limited.</h1>
      
        <img src={images[current].src} alt={images[current].title} />
        <div className="image-title"><center>{images[current].title} </center></div>
      </div>
      <button onClick={handleNext} className="next-button">{'>'}</button>
    </div>
    </div>
    </>
  );
}

export default Slideshow;
