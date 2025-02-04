import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2 className="section-title">Our Features</h2>
      <div className="feature-items">
        <div className="feature-item">
          <h3>AI Dermatology</h3>
          <p>Accurate skin diagnosis powered by AI.</p>
        </div>
        <div className="feature-item">
          <h3>Personalized Care</h3>
          <p>Customized skincare solutions tailored to your needs.</p>
        </div>
        <div className="feature-item">
          <h3>Instant Results</h3>
          <p>Get instant results and advice for better skin health.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
