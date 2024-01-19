import React from "react";
import styles from './Button.module.css';

const ButtonModule = ({ children }) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};

export default ButtonModule;
