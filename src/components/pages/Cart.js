import React from 'react';
import './Cart.css'; // Make sure to use relative path './' before 'Cart.css'

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
