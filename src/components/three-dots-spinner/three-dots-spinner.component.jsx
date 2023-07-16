// Modules
import React from "react";

// Components
import { ThreeDots } from "react-loader-spinner";

export const ThreeDotsSpinner = ({ className, ...restProps }) => {
  return (
    <ThreeDots
      height="20"
      width="50"
      color="hsl(0, 0%, 59%)"
      ariaLabel="loading..."
      wrapperClass={className}
      {...restProps}
    />
  );
};
