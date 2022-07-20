// Modules
import React from "react";
import { connect } from "react-redux";

// Components
import IPAddressResultBoxItem from "./IPAddressResultBoxItem";

const IPAddressResultInfoBox = ({ searchDetails, loading }) => {
  return (
    <div className="search-result-box">
      {searchDetails.map((searchInfo) => (
        <IPAddressResultBoxItem
          key={searchInfo.heading}
          heading={searchInfo.heading}
          content={searchInfo.content}
          loading={loading}
        />
      ))}
    </div>
  );
};

const mapStateToProps = function (state) {
  const { loading, searchDetail } = state.search;

  // Re-Compute Search Detail
  const searchDetails = [
    { heading: "IP ADDRESS", content: searchDetail?.ip },
    {
      heading: "LOCATION",
      content: searchDetail?.address,
    },
    { heading: "TIMEZONE", content: searchDetail?.location?.timezone },
    { heading: "ISP", content: searchDetail?.isp },
  ];

  return { searchDetails, loading: loading };
};

export default connect(mapStateToProps)(IPAddressResultInfoBox);
