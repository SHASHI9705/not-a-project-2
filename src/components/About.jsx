import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Lovely Skins</h2>
      <p className="section-description">
        We are redefining dermatology with AI. Get accurate skin health predictions and personalized skincare recommendations in minutes.
      </p>
      <div className="section-info">
        <div className="info-box">
          <h3>AI Diagnosis</h3>
          <p>Accurate and fast skin health analysis powered by AI.</p>
        </div>
        <div className="info-box">
          <h3>Personalized Care</h3>
          <p>Get a personalized skincare regimen tailored just for you.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
