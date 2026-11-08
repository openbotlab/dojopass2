'use client';

import React from 'react';
import { useCart, type CartItem } from '../contexts/CartContext';

const CartDisplay = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (item: CartItem) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  const totalPrice = state.items.reduce((total, item) => total + (item.price ?? 0), 0);

  return (
    <div>
      <h2>Cart</h2>
      {state.items.length > 0 ? (
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              <span>
                {item.name ?? 'Item'} - ${(item.price ?? 0).toFixed(2)}
              </span>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div>
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default CartDisplay;
