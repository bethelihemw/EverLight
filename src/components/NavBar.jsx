import React, { useState } from 'react';
import logos from '../assets/logos.png';
import '../index.css';

function NavBar() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const handleNavLinkClick = (targetAnchor) => {
    setActiveLink(targetAnchor);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon"><img src={logos} alt="Everlight Logo" /></div>
        <div className="logo-text">
          <span className="brand-title">EVERLIGHT</span>
          <span className="brand-subtitle">ACADEMY</span>
        </div>
      </div>
      
      {/* Conditionally add the 'open' class based on state */}
      <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a 
          href="#home" 
          className={`nav-link ${activeLink === '#home' ? 'active' : ''}`} 
          onClick={() => handleNavLinkClick('#home')}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={`nav-link ${activeLink === '#about' ? 'active' : ''}`} 
          onClick={() => handleNavLinkClick('#about')}
        >
          About Us
        </a>
        <a 
          href="#programs" 
          className={`nav-link ${activeLink === '#programs' ? 'active' : ''}`} 
          onClick={() => handleNavLinkClick('#programs')}
        >
          Programs
        </a>
        <a 
          href="#contact" 
          className={`nav-link ${activeLink === '#contact' ? 'active' : ''}`} 
          onClick={() => handleNavLinkClick('#contact')}
        >
          Contact
        </a>
      </nav>

      {/* Hamburger Menu Toggle Icon */}
      <button 
        className={`hamburger-toggle ${isMobileMenuOpen ? 'activated' : ''}`} 
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
}

export default NavBar;