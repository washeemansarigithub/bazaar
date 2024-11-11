import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Jingle Holiday Bazar</h3>
        <p>Travel with us from here to anywhere...</p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">📧</span>
            <span>jingleholidaybazar@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <span>thejingleholidaybazar@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <span>+91 8506922777 / +91 8506944777</span>
          </div>
        </div>
      </div>

      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
         <a href="#"><li>Home</li>  </a> 
         <a href="#"><li>About Us</li>  </a> 
         <a href="#"><li>Blog List</li>  </a> 
         <a href="#"><li>Destinations</li>  </a> 
         <a href="#"><li>Hotels</li>  </a> 
         <a href="#"><li>Gallery</li>  </a> 
        </ul>
      </div>

      <div className="footer-column">
        <h3>Domestic Packages</h3>
        <ul>
         <a href="#"><li>Uttarakhand</li>  </a> 
         <a href="#"><li>Mumbai</li>  </a> 
         <a href="#"><li>Ladakh</li>  </a> 
         <a href="#"><li>Meghalaya</li>  </a> 
         <a href="#"><li>North East India</li>  </a> 
         <a href="#"><li>Rajasthan</li>  </a> 
        </ul>
      </div>

      <div className="footer-column">
        <h3>International Packages</h3>
        <ul>
         <a href="#"><li>Maldives</li>  </a> 
         <a href="#"><li>Singapore</li>  </a> 
         <a href="#"><li>Switzerland</li>  </a> 
         <a href="#"><li>Saudi Arabia</li>  </a> 
         <a href="#"><li>Thailand</li>  </a> 
         <a href="#"><li>Dubai</li>  </a> 
        </ul>
      </div>

      <div className="footer-column">
        <h3>Yatra</h3>
        <ul>
         <a href="#"> <li>Mata Vaishno</li> </a> 
         <a href="#"> <li>Kedarnath</li> </a> 
         <a href="#"> <li>Badrinath</li> </a> 
         <a href="#"> <li>Char Dham Yatra</li> </a> 
         <a href="#"> <li>Ramayana Yatra</li> </a> 
         <a href="#"> <li>9 Devi Yatra</li> </a> 
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
