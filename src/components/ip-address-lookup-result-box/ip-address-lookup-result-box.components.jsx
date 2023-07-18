// Modules
import React from "react";

// Hooks
import { useMemo } from "react";
import { useIpAddress } from "../../hooks";

// Components
import { IPAddressLookupResultItem } from "../";

// Style
import { IPAddressLookupResultBoxWrapper } from "./ip-address-lookup-result-box.styles";

export const IPAddressLookupResultBox = () => {
  const { searchResult, isLoading } = useIpAddress();

  // Create Enhanced Search Results
  const enhancedSearchResults = useMemo(
    () => [
      { title: "IP ADDRESS", content: searchResult?.ip },
      {
        title: "LOCATION",
        content: `${searchResult?.city}, ${searchResult?.region}, ${searchResult?.country}`,
      },
      { title: "TIMEZONE", content: `UTC: ${searchResult?.timezone?.utc}` },
      { title: "ISP", content: searchResult?.connection?.isp },
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
