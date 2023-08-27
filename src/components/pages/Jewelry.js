import React from 'react';

function Jewelry() {
  const jewelryItems = [
    { id: 1, imageUrl: 'neckshrunk.png', title: 'Elegant Necklace' },
    { id: 2, imageUrl: 'ch2.png', title: 'Stunning Bracelet' },
    { id: 3, imageUrl: 'ch3.png', title: 'Sparkling Earrings' },
    // Add more jewelry items as needed
  ];

  return (
    <div>
      <h2>Our Jewelry Collection</h2>
      <p>Explore our exquisite collection of handcrafted metal jewelry:</p>
      <div className="jewelry-grid">
        {jewelryItems.map((item) => (
          <div key={item.id} className="jewelry-item">
            <img src={item.imageUrl} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jewelry;
