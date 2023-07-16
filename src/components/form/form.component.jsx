// Modules
import React from "react";

export const Form = ({ children, ...restProps }) => {
  return <form {...restProps}>{children}</form>;
};
