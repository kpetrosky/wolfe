import React from 'react';
import { Link } from 'react-router-dom';

function VerticalNavBar() {
  return (
    <div className="vertical-navbar">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Jewelry">Jewelry</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
}

export default VerticalNavBar;
