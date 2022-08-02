import React from "react";
import "./index.scss";

const Button = ({ children, onClick = () => {} }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button className="button" onClick={handleClick}>
      <div>{children}</div>
    </button>
  );
};

export default Button;
