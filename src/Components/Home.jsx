import React from 'react';
import SlideShow from './SlideShow';
import Service from './Service';
import Card from './CardContainer';
import './Home.css';

function Home() {
  return (
    <div className="home">
        
      <SlideShow />
      
      <Service/>
      <Card/>
    </div>
  );
}

export default Home;
