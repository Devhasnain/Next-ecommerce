import React, { createContext, useContext, useState } from 'react';

export const Cart = createContext();

export const CartItems = ({ children }) => {
  const [MyItems, setMyItems] = useState([]);
  return (
    <Cart.Provider value={{ MyItems, setMyItems }}>
      {children}
    </Cart.Provider>
  )
}