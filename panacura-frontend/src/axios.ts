import axios from "axios";

export const baseURL = process.env.REACT_APP_API_ENDPOINT || "/api";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default instance;