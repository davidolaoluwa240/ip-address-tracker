// Modules
import React from "react";
import { toast } from "react-toastify";

// Hooks
import { useForm } from "../../../hooks";

// Components
import Field from "../../field/field.component";
import Button from "../../button/button.component";
import { ReactComponent as CarretRightIconSvg } from "../../../assets/images/icon-arrow.svg";

// Style
import "./ipaddresslookupform.styles";

// Form Initial State
const SEARCH_INITIAL_STATE = {
  searchTerm: "",
};

export const IPAddressLookupForm = () => {
  const { onInputChange, onSubmit, formState } = useForm(
    validateForm,
    SEARCH_INITIAL_STATE
  );

  /**
   * Validate Form
   * @param {Object} formData Form fields data
   * @returns {boolean} Returns true if form is valid, else false
   */
  function validateForm(formData) {
    // 1). Get Search Term
    const { searchTerm } = formData;

    // 2). If Search Term Is Undefined Toast An Error And Return False
    if (!searchTerm) {
      toast.error("Enter an ip address or domain name to continue", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return false;
    }

    // 3). Return True If the Search Term Is Not Undefined
    return true;
  }

  /**
   * Perform Ip Address/Domain Lookup
   * @param {Object} formData Form fields data
   * @param {Function} resetForm Function To Reset Form Fields
   */
  const onSearchSubmit = (formData, resetForm) => {
    // 1). Get Search Term
    const { searchTerm } = formData;

    // 2). Search Ip Address Location Info
    // lookupIpAddress(searchTerm);
    console.log(searchTerm);

    // 3). Reset Form Fields
    resetForm();
  };

  return (
    <form
      className="search-form"
      autoComplete="off"
      onSubmit={onSubmit(onSearchSubmit)}
    >
      <div className="search-form__group">
        <Field
          className="search-form__control"
          type="text"
          name="searchTerm"
          placeholder="Search for any IP address or domain name"
          value={formState.searchTerm}
          onChange={onInputChange}
        />
        <Button className="search-form__btn" type="submit">
          {/* <img
            src={CarretRightIcon}
            className="search-form__btn-icon"
            alt="search"
          /> */}
        </Button>
      </div>
    </form>
  );
};
