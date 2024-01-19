import React from "react";
import "./ButtonCss.css";

const ButtonCss = ({ children, customStyles }) => {
  return (
    <button type="button" className="button-static" style={customStyles}>
      {children}
    </button>
  );
};

export default ButtonCss;
