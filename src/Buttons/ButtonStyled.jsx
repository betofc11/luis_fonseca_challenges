import React from "react";
import { styled } from "styled-components";

const ButtonStyledComponent = styled.button`
  background-color: red;
  color: black;
  &:hover {
    background-color: black;
    color: red;
  }
  &:active {
    background-color: darkred;
    color: black;
  }
`;

const ButtonStyled = ({ children }) => {
  return <ButtonStyledComponent>{children}</ButtonStyledComponent>;
};

export default ButtonStyled;
