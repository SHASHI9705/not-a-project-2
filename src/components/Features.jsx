import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h2 className="section-title">Our Features</h2>
      <div className="feature-items">
        <div className="feature-item">
          <h3>AI Dermatology</h3>
          <p>Accurate skin diagnosis powered by artificial intelligence.</p>
        </div>
        <div className="feature-item">
          <h3>Personalized Care</h3>
          <p>Customized skincare solutions tailored just for you.</p>
        </div>
        <div className="feature-item">
          <h3>Instant Results</h3>
          <p>Get results in minutes, so you can make informed decisions faster.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
