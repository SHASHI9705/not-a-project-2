import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"This app completely transformed my skincare routine!"</p>
          <h4>John Doe</h4>
        </div>
        <div className="testimonial-card">
          <p>"The AI diagnosis was spot on and helped me treat my acne."</p>
          <h4>Jane Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
