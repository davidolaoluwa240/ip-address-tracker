// Axios Instance
import { IPWHO } from "../axios";

/**
 * Search Ip Address Info
 * @param {string|undefined} searchTerm Search query
 */
export const lookupIpAddress = async (searchTerm) => {
  try {
    const { data } = await IPWHO.get(`/${searchTerm || ""}`);
    if (!data.success) throw new Error(data.message);
    return data;
  } catch (err) {
    throw err;
  }
};
