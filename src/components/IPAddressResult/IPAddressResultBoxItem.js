// Modules
import React from "react";

const IPAddressResultBoxItem = ({ title, content }) => {
  return (
    <div className="search-result-box-item">
      <h3 className="search-result-box-item__heading">{title}</h3>
      <p className="search-result-box-item__content">{content}</p>
    </div>
  );
};

export default IPAddressResultBoxItem;
