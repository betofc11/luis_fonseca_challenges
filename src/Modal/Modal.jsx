import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="pop-up card">{children}</div>,
    document.body
  );
};

export default Modal;
