import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"This AI dermatology platform changed the way I care for my skin."</p>
          <h4>John Doe</h4>
        </div>
        <div className="testimonial-card">
          <p>"I love the personalized treatment recommendations! So easy to use."</p>
          <h4>Jane Smith</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
