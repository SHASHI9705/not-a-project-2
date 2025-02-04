import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <p className="section-description">
        Our AI analyzes your skin and provides personalized treatment recommendations.
      </p>
      <div className="steps">
        <div className="step">
          <h3>Step 1</h3>
          <p>Upload a clear image of your skin for analysis.</p>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>Our AI will process the image and generate a report.</p>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <p>Receive personalized skincare recommendations.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
