// Modules
import { toast } from "react-toastify";

// Apis
import ipaddress from "../apis/ipaddress";
import geocoding from "../apis/geocoding";

// Action Types
import {
  SEARCH_ADDRESS_LOADING,
  GET_ADDRESS_INFO,
  GET_SEARCH_ADDRESS_COORDS,
} from "./types";

export const searchIpAddressCoords = function (address) {
  return async function (dispatch) {
    try {
      const response = await geocoding.get("");
    } catch (err) {
      console.log("Could not get address coordinate");
    }
  };
};

export const searchIpAddress = function (payload = {}) {
  return async function (dispatch) {
    try {
      dispatch({ type: SEARCH_ADDRESS_LOADING, payload: true });
      const response = await ipaddress.get("/api/v2/country", {
        ...payload,
      });
      dispatch({ type: GET_ADDRESS_INFO, payload: response.data });
    } catch (err) {
      toast.error("Enter a valid ip address or a domain name");
    } finally {
      dispatch({ type: SEARCH_ADDRESS_LOADING, payload: false });
    }
  };
};
