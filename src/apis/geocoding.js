// Modules
import axios from "axios";

// Opencage Api Key
const KEY = "0b06827026484f5596d03a226de048f7";

export default axios.create({
  baseURL: "https://api.opencagedata.com",
  params: { key: KEY },
});
