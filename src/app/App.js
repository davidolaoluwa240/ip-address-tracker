// Modules
import { useEffect } from "react";
import { connect } from "react-redux";

// Components
import { ToastContainer } from "react-toastify";
import IPAddressLookupForm from "../components/ipaddresssearchform/ipaddresslookupform/ipaddresslookupform.component";
import IPAddressMap from "../components/ipaddressmap/ipaddressmap.component";
import IPAddressResultInfoBox from "../components/ipaddressresult/ipaddressresultinfobox/ipaddressresultinfobox.components";

// Actions
import { getIpAddress } from "../actions/searchActions";

//Styles
import "react-toastify/dist/ReactToastify.css";
import "./App.styles.scss";

const App = ({ getIpAddress }) => {
  useEffect(() => {
    // Dispatch an action to fetch ip address details using user pulic ip address
    getIpAddress();
  }, [getIpAddress]);

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <h1 className="header__heading primary-heading is-text-center">
            IP Address Tracker
          </h1>
          <IPAddressLookupForm />
          <IPAddressResultInfoBox />
        </div>
      </header>
      <main className="main">
        <IPAddressMap />
      </main>
      <ToastContainer />
    </>
  );
};

export default connect(null, { getIpAddress })(App);
