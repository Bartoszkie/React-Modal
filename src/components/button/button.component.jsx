import React from "react";
import "./button.styles.scss";

const Button = ({ onClick, children }) => {
  return <button className="button-component" onClick={onClick}>{children}</button>;
};

export default Button;
