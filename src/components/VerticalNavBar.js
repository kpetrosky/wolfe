import React from 'react';
import { Link } from 'react-router-dom';
import './VerticalNavBar.css'; 

function VerticalNavBar() {
  console.log('Is this visible?'); // Log before the return statement

  return (
    <div className="vertical-navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/jewelry">Jewelry</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/car">Cart</Link>
    </div>
  );
}

export default VerticalNavBar;

