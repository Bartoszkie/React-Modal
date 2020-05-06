import React from "react";
import "./button.styles.scss";

const Button = ({ buttonMethod, children }) => {
  return <button className="button-component" onClick={buttonMethod}>{children}</button>;
};

export default Button;
