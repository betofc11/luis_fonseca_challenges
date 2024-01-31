import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
});

const { Provider, Consumer } = CartContext;


const CartContextProvider = ({ children }) => {
  const [ items, setItems ] = useState([]);
  
  const values = {
    items,
    addItem: (item) => {
      setItems(prev => [...prev, item])
    }
  }
  return <Provider value={values}>{children}</Provider>;
};

export default CartContext;
export { Consumer, CartContextProvider as Provider }