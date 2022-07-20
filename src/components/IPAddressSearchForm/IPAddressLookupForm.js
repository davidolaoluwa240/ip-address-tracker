// Modules
import React, { useState } from "react";

// Components
import Field from "./Field";
import Button from "../Button/Button";

// Assets
import CarretRightIcon from "../../assets/images/icon-arrow.svg";

const AddressLookupForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchSubmit = function (e) {
    e.preventDefault();
  };

  return (
    <form className="search-form" autoComplete="off" onSubmit={onSearchSubmit}>
      <div className="search-form__group">
        <Field
          className="search-form__control"
          type="text"
          placeholder="Search for any IP address or domain"
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <Button
          className="search-form__btn"
          type="submit"
          arialLabel="search for ip address or domain name"
        >
          <img
            src={CarretRightIcon}
            className="search-form__btn-icon"
            alt="search"
          />
        </Button>
      </div>
    </form>
  );
};

export default AddressLookupForm;
