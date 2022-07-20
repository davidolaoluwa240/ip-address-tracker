// Modules
import React from "react";

// Components
import IPAddressResultBoxItem from "./IPAddressResultBoxItem";

const temp = [
  { title: "IP ADDRESS", content: "105.178.32.114" },
  { title: "LOCATION", content: "Kigali Province, RW," },
  { title: "TIMEZONE", content: "+02:00" },
  { title: "ISP", content: "KT RWANDA NETWORK Ltd" },
];
const IPAddressResultInfoBox = () => {
  return (
    <div className="search-result-box">
      {temp.map((searchInfo) => (
        <IPAddressResultBoxItem
          key={searchInfo.title}
          title={searchInfo.title}
          content={searchInfo.content}
        />
      ))}
    </div>
  );
};

export default IPAddressResultInfoBox;
