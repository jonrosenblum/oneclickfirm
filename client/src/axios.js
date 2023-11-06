import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL ?? "/";

console.log("baseURL", baseURL);
axios.defaults.baseURL = baseURL;
// set base url for axios
const instance = axios.create({
  baseURL,
});

export default instance;