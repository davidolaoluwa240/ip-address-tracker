// Modules
import React from "react";

// Hooks
import { useMemo, useContext } from "react";

// Contexts
import { IPAddressContext } from "../../context";

// Components
import { IPAddressLookupResultItem } from "../";

// Style
import { IPAddressLookupResultBoxWrapper } from "./ip-address-lookup-result-box.styles";

export const IPAddressLookupResultBox = () => {
  const { searchResult, isLoading } = useContext(IPAddressContext);

  // Create Enhanced Search Results
  const enhancedSearchResults = useMemo(
    () => [
      { title: "IP ADDRESS", content: searchResult?.ip },
      {
        title: "LOCATION",
        content: searchResult?.address,
      },
      { title: "TIMEZONE", content: searchResult?.location?.timezone },
      { title: "ISP", content: searchResult?.isp },
    ],
    [searchResult]
  );

  // Rendered Ip Address Lookup Result Items
  const renderedIpAddressLookupResultItems = enhancedSearchResults.map(
    (searchResult, i) => (
      <IPAddressLookupResultItem
        key={i}
        isLoading={isLoading}
        {...searchResult}
      />
    )
  );

  return (
    <IPAddressLookupResultBoxWrapper>
      {renderedIpAddressLookupResultItems}
    </IPAddressLookupResultBoxWrapper>
  );
};
