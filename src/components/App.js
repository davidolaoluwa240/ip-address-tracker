// Modules
import React from "react";

// Components
import { ToastContainer } from "react-toastify";
import IPAddressLookupForm from "./IPAddressSearchForm/IPAddressLookupForm";
import IPAddressMap from "./IPAddressMap/IPAddressMap";
import IPAddressResultInfoBox from "./IPAddressResult/IPAddressResultInfoBox";

// Assets
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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

export default App;
