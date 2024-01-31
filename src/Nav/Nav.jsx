import React, { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import LoginContext from "../store/LoginContext";

const Nav = ({ cart }) => {
  const { items } = useContext(CartContext);
  const { isLogged, logIn, logOut } = useContext(LoginContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <li
          style={{
            marginLeft: "10px",
          }}
        >
          {isLogged ? (
            <>
              <span
                style={{
                  marginRight: "10px",
                }}
              >
                Logged In!
              </span>
              <button
                style={{
                  backgroundColor: "darkred",
                }}
                onClick={() => logOut()}
              >
                LogOut
              </button>
            </>
          ) : (
            <button
              style={{
                backgroundColor: "darkgreen",
              }}
              onClick={() => logIn()}
            >
              LogIn
            </button>
          )}
        </li>
        <li
          style={{
            marginLeft: "10px",
          }}
        >
          <button onClick={() => setIsCartOpen(!isCartOpen)}>
            Cart({items.length})
          </button>
        </li>
      </ul>
      {isCartOpen && items.length > 0 && (
        <div className="cart-expanded">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  width="20px"
                  height="20px"
                  alt={item.description}
                />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
