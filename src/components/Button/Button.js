// Modules
import React from "react";

const Button = ({ children, arialLabel, className }) => {
  return (
    <button className={`btn btn--primary ${className}`} aria-label={arialLabel}>
      {children}
    </button>
  );
};

export default Button;
