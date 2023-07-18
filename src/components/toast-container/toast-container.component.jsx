// Modules
import React from "react";
import { toast } from "react-toastify";

// Components
import { ToastContainer as Toastr } from "react-toastify";

// Style
import "react-toastify/dist/ReactToastify.css";

export const ToastContainer = () => (
  <Toastr position={toast.POSITION.BOTTOM_CENTER} />
);
