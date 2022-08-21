// Modules
import { connect } from "react-redux";

// Components
import IPAddressResultBoxItem from "../ipaddressresultitem/ipaddressresultboxitem.components";

// Styles
import "./ipaddressresultinfobox.styles.scss";

const IPAddressResultInfoBox = ({ searchDetails, loading }) => {
  const renderedSearchDetails = searchDetails.map(({ heading, content }) => (
    <IPAddressResultBoxItem
      key={heading}
      heading={heading}
      content={content}
      loading={loading}
    />
  ));

  return <div className="search-result-box">{renderedSearchDetails}</div>;
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

  return { searchDetails, loading };
};

export default connect(mapStateToProps)(IPAddressResultInfoBox);
