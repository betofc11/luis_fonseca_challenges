import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Form from "./Form/Form";
import Product from "./Products/Product";
import { Provider as CartProvider } from "./store/CartContext";
import { Provider as LoginProvider } from "./store/LoginContext"

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prod) => {
        setProducts(prod);
      });
  }, []);

  return (
    <LoginProvider>
      <CartProvider>
        <Nav />
        <h1>Products</h1>
        <div className="cards-container">
          {products.length > 0 ? (
            products.map((prod) => (
              <Product key={prod.id} product={prod} />
            ))
          ) : (
            <h2> There's no products</h2>
          )}
        </div>
        <br />
        <Form />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;
