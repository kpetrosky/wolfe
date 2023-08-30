import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerticalNavBar from './components/VerticalNavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Jewelry from './components/pages/Jewelry'; // Import the Jewelry component
import './App.css'; // Import the CSS file for styling

function AppContainer() {
  console.log('Can you see me?'); // Log outside the return statement

  return (
    <Router>
      <div className="app">
        <VerticalNavBar />
        <div className="content">
          <Header title="Chained Wolfe MetalCrafts" links={[]} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jewelry" element={<Jewelry />} /> {/* Add this line */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default AppContainer;
