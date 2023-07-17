// Modules
import React from "react";

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
