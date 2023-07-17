// Axios Instance
import { IPWHO } from "../axios";

/**
 * Search Ip Address or Domain Details
 * @param {string|undefined} searchTerm Search query
 */
export const lookupIpAddress = async (searchTerm) => {
  try {
    const data = await IPWHO.get(`/${searchTerm || ""}`);
    console.log(data);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
