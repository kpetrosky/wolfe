import React, { useState } from 'react';
import necklaceImage from '../images/neckshrunk.png';
import braceletImage from '../images/ch2.png';
import earringsImage from '../images/ch3.png';
import Cart from './Cart'; // Import the Cart component
import './Jewelry.css'; 

function Jewelry() {
  const Jewelry = [
    { id: 1, imageUrl: necklaceImage, title: 'Elegant Necklace' },
    { id: 2, imageUrl: braceletImage, title: 'Stunning Bracelet' },
    { id: 3, imageUrl: earringsImage, title: 'Sparkling Earrings' },
    // Add more jewelry items as needed
  ];

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <h2>Our Jewelry Collection</h2>
      <p>Explore our exquisite collection of handcrafted metal jewelry:</p>
      <div className="jewelry-grid">
        {Jewelry.map((item) => (
          <div key={item.id} className="jewelry">
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <button onClick={() => alert(`More information for ${item.title}`)}>
              More Information
            </button>
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
