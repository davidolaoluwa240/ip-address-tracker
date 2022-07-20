import React from "react";

const Field = ({ type, value, placeholder, onChange, className }) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Field;
