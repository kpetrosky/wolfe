import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you. Feel free to reach out:</p>
    
      </div>
      <div>
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to reach out to us using the contact information below:</p>
      <ul>
        <li>Email: contact@chainedwolfe.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>Address: 123 Metalcraft Lane, Forge City</li>
      </ul>
    </div>
    </section>
  );
};

export default Contact;
