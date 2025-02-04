import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';  {/* Importing the Features component */}
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <HowItWorks />
      <Features />  {/* Add the Features component */}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
