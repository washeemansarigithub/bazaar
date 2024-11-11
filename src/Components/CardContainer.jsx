import React, { useState } from 'react';
import './Card.css';

function Card({ title, icon, shortText, longText }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="card">
      <div className="card-header">
        <i className="card-icon">{icon}</i> {/* Icon can be passed as a prop */}
        <h2 className="card-title">{title}</h2>
      </div>
      <p className="card-text">{shortText}</p>
      
      {isExpanded && (
        <div className="card-content">
          <p>{longText}</p>
        </div>
      )}

      <button className="expand-button" onClick={toggleContent}>
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="card-container">
      <Card 
        title="Jingle Holiday Bazar Homestays"
        icon="🌟"
        shortText="Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to."
        longText="closely savour the local flavours of a place, and prefer the comforts of a homely environment,Jingle Holiday Bazar Homestays is the answer.Jingle Holiday Bazar already has over 3500 homestay properties and is expanding fast. It has a stronghold in South India and across most hill stations of North India, with these places providing unique homestay experiences to customers. Some of its most popular homestay destinations are Goa, Manali, Shimla, Coorg, Wayanad, among other places."
      />
      <Card 
        title="Jingle Holiday Bazar Hotels"
        icon="📚"
        shortText="We are back in the post-pandemic world with a bouquet of hotels across Indian cities ranging from leisure to business ones with a new outlook. Jingle Holiday Bazar who has always been on the forefront of assuring a"
        longText="comfortable stay which is a bang for your bucks, is offering you online hotel booking that guarantees you hygienic, sanitised rooms across hotels in India. Explore a raft of interesting features such as Clean Pass stays, travel again offers and long stay discounts encouraging you to travel again, make your hotel booking while keeping your anxieties at bay."
      />
      <Card 
        title="Jingle Holiday Bazar flights"
        icon="🌍"
        shortText="Purchasing flight tickets and confirming your flight booking is the key aspect of planning a trip. Now whether you are travelling for business or on leisure, you cannot make an itinerary until you have first and foremost booked your flights."
        longText="Procuring an air ticket is a mandatory first step once your travel plans are confirmed. It feels as though half the job is done the moment you secure confirmed flight ticket booking in your hand. The entire activity of searching air connectivity between two cities, checking the schedule of the flight and zeroing in on one that's most convenient to you can feel like a lot of work especially if you are in a hurry to book your flights."
      />
    </div>
  );
}

export default CardContainer;
