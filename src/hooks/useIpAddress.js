// Hooks
import { useContext } from "react";

// Contexts
import { IPAddressContext } from "../context";

/**
 * Use Ip Address Hook
 * @returns {Object}
 */
export const useIpAddress = () => {
  const value = useContext(IPAddressContext);
  return { ...value };
};
