// Modules
import React from "react";

// Components
import { Fragment } from "react";
import {
  IPAddressLookupForm,
  IPAddressMap,
  IPAddressResultInfoBox,
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
  return (
    <Fragment>
      <AppHeader>
        <AppHeaderContainer>
          <AppHeaderHeading>IP Address Tracker</AppHeaderHeading>
          <IPAddressLookupForm />
          <IPAddressResultInfoBox />
        </AppHeaderContainer>
      </AppHeader>

      <AppMain>
        <IPAddressMap />
      </AppMain>

      {/* Register Toast Container */}
      <ToastContainer />

      {/* Register Global Style */}
      <GlobalStyle />
    </Fragment>
  );
};
