// Axios
import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: "https://api.adviceslip.com/",
})

export default api;