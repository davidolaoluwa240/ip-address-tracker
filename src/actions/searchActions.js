// Modules
import { toast } from "react-toastify";

// Apis
import ipaddress from "../apis/ipaddress";
import geocoding from "../apis/geocoding";

// Action Types
import { SEARCH_LOADED, SEARCH_LOADING } from "./types";

export const getIpAddress = function (params = {}) {
  return async function (dispatch) {
    try {
      // Start Loading
      dispatch({ type: SEARCH_LOADING, payload: true });
      // Search for specified Ip Address Or Domain Name
      const searchResponse = await ipaddress.get("/api/v2/country", params);
      const address = `${searchResponse.data.location.region}, ${searchResponse.data.location.country}`;
      // Get the Coordinates of the ipaddress lookup result
      const geocodingResponse = await geocoding.get("/geocode/v1/json", {
        params: { q: address },
      });
      const { lat, lng } = geocodingResponse.data.results?.pop()?.geometry;
      // Dispatch action to update search state
      dispatch({
        type: SEARCH_LOADED,
        payload: { ...searchResponse.data, coords: [lat, lng], address },
      });
    } catch (err) {
      // When Error occur toast error
      toast.error("Enter a valid ip address or a domain name");
    } finally {
      // Stop Loading
      dispatch({ type: SEARCH_LOADING, payload: false });
    }
  };
};
