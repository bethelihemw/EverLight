import React from 'react';
import '../index.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Side: Historical Narrative & Mission */}
        <div className="about-content">
          <span className="about-badge">OUR STORY</span>
          <h2 className="about-title">Nurturing Minds, Building Legacies</h2>
          
          <p className="about-text animate-fade-in">
            Founded with a vision to redefine early childhood development, <strong>Everlight Academy</strong> began as a small community initiative dedicated to fostering curiosity. Over the years, we have grown into a premier hub for early education, blending timeless developmental principles with modern, interactive learning techniques.
          </p>
          
          <p className="about-text">
            Our history is rooted in the belief that every child possesses a unique spark. By providing a safe, joyful, and rich environment, our seasoned educators focus on cognitive growth, emotional intelligence, and creative expression—ensuring that the foundational years of your child's life pave the path for lifelong excellence.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">✨</span>
              <div>
                <h4>Our Mission</h4>
                <p>To light the flame of curiosity and lifelong learning in every young mind.</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🤝</span>
              <div>
                <h4>Our Community</h4>
                <p>Partnering deeply with parents to foster a supportive, loving village.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Stats / History Dashboard Layout */}
        <div className="about-visual">
          <div className="stats-grid">
            <div className="stat-card orange-glow">
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-card blue-bg">
              <h3>500+</h3>
              <p>Bright Graduates</p>
            </div>
            <div className="stat-card blue-border">
              <h3>100%</h3>
              <p>Safe & Certified</p>
            </div>
            <div className="stat-card orange-bg">
              <h3>1:8</h3>
              <p>Teacher-to-Child Ratio</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;