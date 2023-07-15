// Modules
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { App } from "./app/app.component";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
