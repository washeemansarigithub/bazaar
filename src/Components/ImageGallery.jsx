import React from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <div className="image-item">
        <img src="./Leh03.webp" alt="Leh" />
        <div className="description">
        <a href="#"> <h3>Week At Thiksey Monastery</h3> </a><p>This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.</p></div>
      </div>
      <div className="image-item">
        <img src="./Solang-Valley.webp" alt="Solang Valley" />
        <div className="description">
        <a href="#"> <h3>Week At Solang Valley, Manali</h3> </a>
        
            <p>A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking for snow-based activities and sports, winters are the best time to visit</p>
            <a href="#"> <h3>Contact</h3> </a></div>
      </div>
      <div className="image-item">
        <img src="./Goa.webp" alt="Image 3" />
      
        <a href="#"> <h3>
        Week At Beach in Goa</h3> </a>
        <div className="description">Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of a life without stress and worries. The multitude of beaches in Goa</div>
      </div>

      <div className="image-item">
        <img src="./Himalya.webp" alt="Image 3" />
      
        <a href="#"> <h3>The Mountain, Himalyas</h3> </a>
        <div className="description">
            <p>Himalayas, great mountain system of Asia forming a barrier between the Plateau of Tibet to the north and the alluvial plains of the Indian subcontinent to the south. The Himalayas include the highest mountains in the world, with more than 110 peaks rising to elevations of 24,000 feet (7,300 meters) or more above sea level. </p>
            <a href="#"><h3>Contact</h3> </a>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
