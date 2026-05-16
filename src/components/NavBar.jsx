import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../index.css';

function NavBar() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <div className="logo-icon"><img src={logo} alt="Everlight Logo" /></div>
        <div className="logo-text">
          <span className="brand-title">EVERLIGHT</span>
          <span className="brand-subtitle">ACADEMY</span>
        </div>
      </div>
      
      {/* Conditionally add the 'open' class based on state */}
      <nav className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link active" onClick={closeMobileMenu}>Home</a>
        <a href="#about" className="nav-link" onClick={closeMobileMenu}>About Us</a>
        <a href="#programs" className="nav-link" onClick={closeMobileMenu}>Programs</a>
        <a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a>
        {/* Mobile-only CTA button inside the menu */}
        <button className="cta-button mobile-cta" onClick={closeMobileMenu}>Enroll Now</button>
      </nav>

      {/* Desktop-only CTA Button */}
      <div className="navbar-actions desktop-cta">
        <button className="cta-button">Enroll Now</button>
      </div>

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