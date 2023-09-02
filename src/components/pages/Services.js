import React from 'react';
import './Services.css'; // Import your CSS file for styling

const Services = () => {
  return (
    <section className="services">
      <div className="services-content">
        <h2>My Services</h2>
        <p>I offer a range of web design services tailored to your needs:</p>
        <div className="service-container">
          <div className="service">
            <h3>Handcrafted Metal Jewelry</h3>
            <p>Discover my exquisite collection of handcrafted metal jewelry, meticulously designed to reflect your unique style. Each piece is a work of art, crafted with precision and passion.</p>
          </div>
          <div className="service">
            <h3>Custom Metal Crafts</h3>
            <p>I specialize in creating custom metal crafts that showcase your individuality. Whether it's personalized jewelry or bespoke metal art, I turn your ideas into beautifully crafted reality.</p>
          </div>
        </div> {/* Closing service-container div */}
      </div>
    </section>
  );
};

export default Services;
