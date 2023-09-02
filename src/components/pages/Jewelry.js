import React, { useState } from 'react';
import necklaceImage from '../images/try1.png';
import braceletImage from '../images/try2.png';
import braceletImage2 from '../images/try3.png';
import braceletImage3 from '../images/try4.png'; // Add the closing quote here

import Cart from './Cart'; // Import the Cart component
import './Jewelry.css';

// ... rest of your code

function Jewelry() {
  const jewelryItems = [
    { id: 1, imageUrl: necklaceImage, title: 'Elegant Necklace', price: 100, description: 'This elegant necklace is a timeless piece of art.' },
    { id: 2, imageUrl: braceletImage, title: 'Stunning Bracelet', price: 50, description: 'Our stunning bracelet will add charm to your wrist.' },
    { id: 3, imageUrl: braceletImage2, title: 'Stunning Bracelet', price: 50, description: 'Our stunning bracelet will add charm to your wrist.' },
    { id: 4, imageUrl: braceletImage3, title: 'Stunning Bracelet', price: 50, description: 'Our stunning bracelet will add charm to your wrist.' }
    // Add more jewelry items as needed
  ];

  const [cartItems, setCartItems] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const toggleItem = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null); // Close the item if it's already open
    } else {
      setExpandedItem(itemId); // Open the clicked item
    }
  };

  return (
    <div className="jewelry-container">
      <h2>Our Jewelry Collection</h2>
      <p>Explore our exquisite collection of handcrafted metal jewelry:</p>
      <div className="jewelry-grid">
        {jewelryItems.map((item) => (
          <div key={item.id} className="jewelry-item">
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button onClick={() => toggleItem(item.id)}>
              Information
            </button>
            {expandedItem === item.id && (
              <div className="item-details">
                <p>{item.description}</p>
              </div>
            )}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart-container">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Jewelry;

