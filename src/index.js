// Modules
import React from "react";
import ReactDOM from "react-dom/client";

// Context Providers
import { IPAddressProvider } from "./context";

// Components
import { App } from "./app/app.component";

// Mount React To DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <IPAddressProvider>
      <App />
    </IPAddressProvider>
  </React.StrictMode>
);
