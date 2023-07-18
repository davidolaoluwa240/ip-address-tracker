// Modules
import React from "react";
import { toast } from "react-toastify";

// Hooks
import { useEffect } from "react";
import { useIpAddress } from "../hooks";

// Components
import { Fragment } from "react";
import {
  IPAddressLookupForm,
  IPAddressLookupResultBox,
  IPAddressLookupResultMap,
  ToastContainer,
} from "../components";

//Style
import {
  AppHeader,
  AppHeaderContainer,
  AppHeaderHeading,
  AppMain,
  GlobalStyle,
} from "./app.styles";

export const App = () => {
  const { lookupIpAddress, error } = useIpAddress();

  useEffect(() => {
    // Get User Ip Address Information On Page Load
    lookupIpAddress();
  }, []);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <Fragment>
      <AppHeader>
        <AppHeaderContainer>
          <AppHeaderHeading>IP Address Tracker</AppHeaderHeading>
          <IPAddressLookupForm />
          <IPAddressLookupResultBox />
        </AppHeaderContainer>
      </AppHeader>

      <AppMain>
        <IPAddressLookupResultMap />
      </AppMain>

      {/* Register Toast Container */}
      <ToastContainer />

      {/* Register Global Style */}
      <GlobalStyle />
    </Fragment>
  );
};
