import React from 'react';
import '../index.css';
import heroImage from '../assets/hero.png'; // Uncomment this once you have your kids image asset!
import pencil from '../assets/pencil.png';
import math from '../assets/math.png';
import english from '../assets/english.png';


function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          IGNITING BRIGHT <br />
          <span className="highlight-text">FUTURES.</span>
        </h1>
        <p className="hero-subtitle">
          Where Every Child Shines! A modern approach to kindergarten 
          education in a safe, vibrant, and loving environment.
        </p>
        <button className="hero-cta">EXPLORE PROGRAMS</button>
      </div>
      <span className="puzzel"><img src={math} alt="" /></span>
      <span className="teddy"><img src={english} alt="" /></span>
      <span className="paintbrush"><img src={pencil} alt="" /></span>
      <div className="hero-image-container">
        {/* Placeholder circle or illustration until you drop your image file in */}
        <div className="hero-image-fallback">
          
        </div>
      </div>
    </section>
  );
}

export default Hero;