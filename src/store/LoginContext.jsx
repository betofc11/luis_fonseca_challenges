import React from "react";
import { createContext, useState } from "react";

const LoginContext = createContext({
  isLogged: false,
  logIn: () => {},
  logOut: () => {},
});

const { Provider, Consumer } = LoginContext;

const LoginContextProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  const values = {
    isLogged: logged,
    logIn: () => {
      setLogged(true);
    },
    logOut: () => {
      setLogged(false);
    },
  };
  return <Provider value={values}>{children}</Provider>;
};

export default LoginContext;
export { Consumer, LoginContextProvider as Provider };
