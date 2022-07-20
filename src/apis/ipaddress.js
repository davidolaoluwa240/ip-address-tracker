import axios from "axios";

export default axios.create({
  baseURL: "https://geo.ipify.org",
  params: { apiKey: "at_DE8tYqiqJhmDbygGAQxrFe1EQOOXv" },
});
