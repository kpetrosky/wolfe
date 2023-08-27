import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerticalNavBar from './components/VerticalNavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import './App.css'; // Import the CSS file for styling

function AppContainer() {
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
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default AppContainer;

