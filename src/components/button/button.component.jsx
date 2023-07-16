// Modules
import React from "react";

// Style
import { ButtonBase } from "./button.styles";

export const Button = ({ children, color, ...restProps }) => {
  return (
    <ButtonBase $color={color} {...restProps}>
      {children}
    </ButtonBase>
  );
};
