// Modules
import React from "react";

// Style
import {
  IPAddressLookupResultItemContent,
  IPAddressLookupResultItemHeading,
  IPAddressLookupResultItemWrapper,
  IPAddressLookupResultItemSpinner,
} from "./ip-address-lookup-result-item.styles";

export const IPAddressLookupResultItem = ({ title, content, isLoading }) => {
  return (
    <IPAddressLookupResultItemWrapper>
      <IPAddressLookupResultItemHeading>
        {title}
      </IPAddressLookupResultItemHeading>
      <IPAddressLookupResultItemSpinner
        wrapperStyle={{ display: isLoading ? "flex" : "none" }}
        ariaLabel="Loading ip address info"
      />
      <IPAddressLookupResultItemContent $isVisible={!isLoading}>
        {content}
      </IPAddressLookupResultItemContent>
    </IPAddressLookupResultItemWrapper>
  );
};
