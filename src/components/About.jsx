import React from 'react';
import '../index.css';

function About() {
  return (
    <section id="about" className="about-section">
      {/* Background Decorative Sparkles & Playful Emojis/Shapes */}
      <div className="playful-shape shape-blob-orange"></div>
      <div className="playful-shape shape-blob-purple"></div>
      <div className="playful-shape shape-sparkle-1">✨</div>
      <div className="playful-shape shape-sparkle-2">✨</div>

      <div className="about-container">
        
        {/* Left Side: Historical Narrative & Horizontal Icon Items */}
        <div className="about-content animate-fade-up">
          <span className="about-badge">OUR STORY</span>
          <h2 className="about-title">Nurturing Minds, Building Legacies</h2>
          
          <p className="about-text">
            Founded with a vision to redefine early childhood development, <strong>Everlight Academy</strong> began as a small community initiative dedicated to fostering curiosity. Over the years, we have grown into a premier hub for early education, blending timeless developmental principles with modern, interactive learning techniques.
          </p>
          
          <p className="about-text">
            Our history is rooted in the belief that every child possesses a unique spark. By providing a safe, joyful, and rich environment, our seasoned educators focus on cognitive growth.
          </p>

          {/* New Horizontal Row Layout for Mission and Community */}
          <div className="about-highlights-row">
            <div className="highlight-item-card">
              <div className="highlight-icon-box glow-yellow">🌟</div>
              <div className="highlight-card-text">
                <h4>Our Mission</h4>
                <p>To light the flame of curiosity in every young mind.</p>
              </div>
            </div>
            
            <div className="highlight-item-card">
              <div className="highlight-icon-box glow-orange">🤝</div>
              <div className="highlight-card-text">
                <h4>Our Community</h4>
                <p>Partnering with parents to build a loving village.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual 3D Glass & Neon Dashboard Layout */}
        <div className="about-visual animate-fade-up delay-1">
          <div className="stats-grid">
            <div className="stat-card glossy-blue">
              <h3>10+</h3>
              <p>Growing Years</p>
              <div className="card-shine"></div>
            </div>
            
            <div className="stat-card orange-border-glow">
              <h3 className="orange-text">29+</h3>
              <p>Creative Programs</p>
            </div>
            
            <div className="stat-card d-orange">
              <h3>20+</h3>
              <p>Strong Educators</p>
              <div className="card-shine"></div>
            </div>
            
            <div className="stat-card blue-border-glow">
              <h3 className="blue-text">500+</h3>
              <p>Bright Graduates</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;