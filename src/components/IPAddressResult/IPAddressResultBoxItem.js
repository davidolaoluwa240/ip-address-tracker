// Modules
import React from "react";

// Components
import { ThreeDots } from "react-loader-spinner";

const IPAddressResultBoxItem = ({ heading, content, loading }) => {
  return (
    <div className="search-result-box-item">
      <h3 className="search-result-box-item__heading">{heading}</h3>
      {loading && (
        <div className="search-result-box-item__loader">
          <ThreeDots
            height="20"
            width="50"
            color="hsl(0, 0%, 59%)"
            ariaLabel="loading"
          />
        </div>
      )}
      {!loading && <p className="search-result-box-item__content">{content}</p>}
    </div>
  );
};

export default IPAddressResultBoxItem;
