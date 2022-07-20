// Modules
import React, { useState } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";

// Components
import Field from "./Field";
import Button from "../Button/Button";

// Assets
import CarretRightIcon from "../../assets/images/icon-arrow.svg";

// Actions
import { getIpAddress } from "../../actions/searchActions";

const AddressLookupForm = ({ getIpAddress }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchSubmit = function (e) {
    e.preventDefault();

    // Validate input value
    if (!searchTerm) {
      toast("Enter a ip address or domain to continue");
      return;
    }

    // Dispatch an action to fetch term
    if (!Number(searchTerm[0])) {
      getIpAddress({ params: { domain: searchTerm } });
    } else {
      getIpAddress({ params: { ipAddress: searchTerm } });
    }

    // Reset input
    setSearchTerm("");
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

export default connect(null, { getIpAddress })(AddressLookupForm);
