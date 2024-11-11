import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState({
    domestic: false,
    international: false,
    place: false,
    packages: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/mainlogo.gif" alt="Logo" />
      </div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>

        <div className="dropdown" onClick={() => toggleDropdown('domestic')}>
          <a href="#domestic">
            Domestic <span className="caret">{dropdownOpen.domestic ? '▲' : '▼'}</span>
          </a>
          {dropdownOpen.domestic && (
            <div className="dropdown-content">
              <a href="#north">North</a>
              <a href="#east">East</a>
              <a href="#west">West</a>
              <a href="#south">South</a>
            </div>
          )}
        </div>

        <div className="dropdown" onClick={() => toggleDropdown('international')}>
          <a href="#international">
            International <span className="caret">{dropdownOpen.international ? '▲' : '▼'}</span>
          </a>
          {dropdownOpen.international && (
            <div className="dropdown-content">
              <a href="#newzealand">New Zealand</a>
              <a href="#thailand">Thailand</a>
              <a href="#india">India</a>
              <a href="#belgium">Belgium</a>
              <a href="#canada">Canada</a>
              <a href="#dubai">Dubai</a>
              <a href="#singapore">Singapore</a>
              <a href="#germany">Germany</a>
              <a href="#maldives">Maldives</a>
              <a href="#nepal">Nepal</a>
              <a href="#switzerland">Switzerland</a>
            </div>
          )}
        </div>

        
        <a href="#contact">Contact Us</a>
        <a href="#phone">+91-8506922777</a>
        <a href="#pay">Pay Now</a>
      </div>
    </div>
  );
}

export default Navbar;
