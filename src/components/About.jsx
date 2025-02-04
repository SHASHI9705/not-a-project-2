import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2 className="section-title">About Lovely Skins</h2>
      <p className="section-description">
        We are a cutting-edge company that uses AI to revolutionize dermatology.
        Our platform provides personalized skincare recommendations, based on your skin analysis.
      </p>
      <div className="section-info">
        <div className="info-box">
          <h3>AI Diagnosis</h3>
          <p>Accurate and personalized skin health analysis using AI.</p>
        </div>
        <div className="info-box">
          <h3>Personalized Treatment</h3>
          <p>Get customized skincare plans tailored to your skin's needs.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
