// Modules
import axios from "axios";

// IPIFY Api Key
const KEY = "at_JAVmLybQS8O53CRNQVC6rjGftdowN";

// Create axios instance for ipify
export default axios.create({
  baseURL: "https://geo.ipify.org",
  params: { apiKey: KEY },
});
