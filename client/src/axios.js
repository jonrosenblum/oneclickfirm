import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL ?? "/";

// set base url for axios
const instance = axios.create({
  baseURL,
});

export default instance;
