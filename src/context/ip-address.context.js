// Modules
import { useState } from "react";
import { createContext } from "react";

// Create Ip Address Context
export const IPAddressContext = createContext({
  searchResult: null,
  isLoading: false,
});

export const IPAddressProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <IPAddressContext.Provider value={{ searchResult, isLoading }}>
      {children}
    </IPAddressContext.Provider>
  );
};
