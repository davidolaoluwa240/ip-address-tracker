// Modules
import axios from "axios";

// IPIFY Api Key
const KEY = "at_JAVmLybQS8O53CRNQVC6rjGftdowN";

export default axios.create({
  baseURL: "https://geo.ipify.org",
  params: { apiKey: KEY },
});
