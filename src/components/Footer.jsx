import React from 'react';
import '../index.css';
import logos from '../assets/logos.png'; // Reusing your brand logo image

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-top">
        
        {/* Left Column: Brand Identity */}
        <div className="footer-brand">
          <div className="footer-logo-wrapper">
            <div className="footer-logo-icon">
              <img src={logos} alt="Everlight Academy Logo" />
            </div>
            <div className="footer-logo-text">
              <span className="footer-brand-title">EVERLIGHT</span>
              <span className="footer-brand-subtitle">ACADEMY</span>
            </div>
          </div>
          <p className="footer-tagline">
            Igniting bright futures through a safe, joyful, and modern approach to early childhood education.
          </p>
        </div>

        {/* Center Column: Quick Navigation Links */}
        <div className="footer-links-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#programs">Our Programs</a></li>
            <li><a href="#contact">Contact Admissions</a></li>
          </ul>
        </div>

        {/* Right Column: Contact Details & Social Media */}
        <div className="footer-contact-col">
          <h4>Connect With Us</h4>
          <p className="footer-contact-item">📞 +251 935-7879</p>
          <p className="footer-contact-item">✉️ everlight@website.com</p>
          <p className="footer-contact-item">📍 Ethiopia, Hawassa</p>
          
          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook" className="social-icon">Facebook</a>
            <a href="#instagram" aria-label="Instagram" className="social-icon">Instagram</a>
            <a href="#youtube" aria-label="YouTube" className="social-icon">YouTube</a>
            <a href="#tiktok" aria-label="TikTok" className="social-icon">TikTok</a>
          </div>
        </div>

      </div>

      {/* Bottom Row: Copyright Notice */}
      <div className="footer-bottom">
        <p>&copy; Copyright {currentYear} Everlight Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;