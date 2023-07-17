// Modules
import axios from "axios";

// Create axios instance for IPWHO
export const IPWHO = axios.create({
  baseURL: process.env.REACT_APP_IPWHO_BASE_URL,
});
