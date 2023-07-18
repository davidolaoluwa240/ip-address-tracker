// Modules
import React from "react";
import { toast } from "react-toastify";
import { isIP } from "is-ip";

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

    // 2).  Sanitize Search Term
    const searchTermSantized = searchTerm.trim();

    // 3). Create Error Message
    let errorMessage;

    // 4). Update Error Message If Search Term Is Undefined
    if (!searchTermSantized) {
      errorMessage = "Enter An IP Address To Get Started";
    }

    // 5). Update Error Message If Enter Ip Address Is Invalid
    if (searchTermSantized && !isIP(searchTermSantized)) {
      errorMessage = "Wrong or Invalid IP Address";
    }

    // 6). Toast Error Message If It Exist And Return False To Cancel Form Submission
    if (errorMessage) {
      toast.error(errorMessage);
      return false;
    }

    // 7). Return True To Submit Form
    return true;
  }

  /**
   * Perform Ip Address Lookup
   * @param {Object} formData Form fields data
   * @param {Function} resetForm Function To Reset Form Fields
   */
  const onSearchSubmit = async (formData, resetForm) => {
    // 1). Get Search Term
    const { searchTerm } = formData;

    // 2). Search Ip Address Location Info
    await lookupIpAddress(searchTerm.trim());

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
          placeholder="Search for any IP address"
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
