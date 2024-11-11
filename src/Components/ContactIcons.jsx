import React, { useState } from 'react';
import './ContactIcons.css';

const ContactIcons = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(activeIcon === iconName ? null : iconName);
  };

  return (
    <div className="contact-icons">
      <a 
        href="waseemansaria2003@gmail.com" 
        className={`icon gmail ${activeIcon === 'gmail' ? 'active' : ''}`}
        onClick={() => handleIconClick('gmail')}
      >
        <img src="gmail1.png" alt="Gmail" />
      </a>

      <a 
        href="9415714691" 
        className={`icon phone ${activeIcon === 'phone' ? 'active' : ''}`}
        onClick={() => handleIconClick('phone')}
      >
        <img src="call1.png" alt="Phone" />
      </a>

      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`icon whatsapp ${activeIcon === 'whatsapp' ? 'active' : ''}`}
        onClick={() => handleIconClick('whatsapp')}
      >
        <img src="Whatsapp.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default ContactIcons;
