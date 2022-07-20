// Modules
import axios from "axios";

// IPIFY Api Key
const KEY = "at_DE8tYqiqJhmDbygGAQxrFe1EQOOXv";

export default axios.create({
  baseURL: "https://geo.ipify.org",
  params: { apiKey: KEY },
});
