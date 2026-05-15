import React, { useState } from 'react';
import '../index.css';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., Axios post, EmailJS, etc.)
    alert(`Thank you ${formData.name}! Your message has been sent to Everlight Academy.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Left Side: Contact Info Details */}
        <div className="contact-info">
          <span className="contact-badge">GET IN TOUCH</span>
          <h2 className="contact-title">We’d Love to Hear From You</h2>
          <p className="contact-desc">
            Have questions about admissions, schedules, or our curriculum? Reach out today, and our admissions team will get back to you shortly.
          </p>

          <div className="info-links-stack">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <h4>Visit Our Campus</h4>
                <p>123 Education Lane, Brightside District</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Call Our Office</h4>
                <p>+123 335-7879 / +123 336-7879</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">✉️</span>
              <div>
                <h4>Email Admissions</h4>
                <p>everlight@website.com</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">🕒</span>
              <div>
                <h4>School Hours</h4>
                <p>Mon - Fri: 8:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Contact Form */}
        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="form-heading">Send Us a Message</h3>
            
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="John Doe" 
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="johndoe@example.com" 
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="(123) 456-7890" 
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message"
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="4" 
                placeholder="Tell us about your child or ask any questions..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">Submit Message</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contacts;