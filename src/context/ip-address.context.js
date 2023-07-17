// Modules
import { useState } from "react";
import { createContext } from "react";

// Apis
import * as APIS from "../apis";

// Create Ip Address Context
export const IPAddressContext = createContext({
  searchResult: null,
  isLoading: false,
  error: null,
  lookupIpAddress: (searchTerm) => null,
});

export const IPAddressProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Search Ip Address or Domain Details
   * @param {string|undefined} searchTerm Search query
   */
  const lookupIpAddress = async (searchTerm) => {
    try {
      // 1). Start Loading
      setIsLoading(true);

      // 2). Perform Lookup
      const data = await APIS.lookupIpAddress(searchTerm);

      // 3). Update Search Result State
      setSearchResult(data);
    } catch (err) {
      // 4). Update Error State
      setError(err.data);
    } finally {
      // 5). Stop Loading
      setIsLoading(false);
    }
  };

  return (
    <IPAddressContext.Provider
      value={{ searchResult, isLoading, lookupIpAddress, error }}
    >
      {children}
    </IPAddressContext.Provider>
  );
};
