// Modules
import React from "react";
import { toast } from "react-toastify";

// Hooks
import { useForm, useIpAddress } from "../../hooks";

// Style
import {
  IPAddressLookupFormControl,
  IPAddressLookupFormWrapper,
  IPAddressLookupFormGroup,
  IPAddressLookupFormButton,
  StyledCarretRightIconSvg,
} from "./ip-address-lookup-form.styles";

// Form Initial State
const SEARCH_INITIAL_STATE = {
  searchTerm: "",
};

export const IPAddressLookupForm = () => {
  const { onInputChange, onSubmit, formState } = useForm(
    validateForm,
    SEARCH_INITIAL_STATE
  );
  const { lookupIpAddress } = useIpAddress();

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
  const onSearchSubmit = async (formData, resetForm) => {
    // 1). Get Search Term
    const { searchTerm } = formData;

    // 2). Search Ip Address Location Info
    await lookupIpAddress(searchTerm);

    // 3). Reset Form Fields
    resetForm();
  };

  return (
    <IPAddressLookupFormWrapper
      autoComplete="off"
      onSubmit={onSubmit(onSearchSubmit)}
    >
      <IPAddressLookupFormGroup>
        <IPAddressLookupFormControl
          type="text"
          name="searchTerm"
          placeholder="Search for any IP address or domain name"
          value={formState.searchTerm}
          onChange={onInputChange}
        />
        <IPAddressLookupFormButton type="submit">
          <StyledCarretRightIconSvg aria-label="search" />
        </IPAddressLookupFormButton>
      </IPAddressLookupFormGroup>
    </IPAddressLookupFormWrapper>
  );
};
