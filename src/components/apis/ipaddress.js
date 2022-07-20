import axios from "axios";

export default axios.create({
  baseURL: "https://geo.ipify.org/api/v2/country?apiKey=&=8.8.8.8",
  params: { apiKey: "at_DE8tYqiqJhmDbygGAQxrFe1EQOOXv" },
});

// Todo: Remove later
// ipAddress: to query ip address
// domain: to query domain name
