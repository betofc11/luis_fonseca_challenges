import React, { useContext } from "react";
import CartContext from "../store/CartContext";

const Product = ({ product }) => {
  const { addItem } = useContext(CartContext);
  return (
    <div key={product.id} className="card">
      <img src={product.image} width="100px" height="100px" />
      <h5 className="title">{product.title}</h5>
      <p className="price">${product.price}</p>
      <button onClick={() => addItem(product)}>Add to cart</button>
    </div>
  );
};

export default Product;
