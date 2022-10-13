import axios from "axios";
const BASE_URL = "http://103.242.116.207:9000/api/auth/";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: "http://103.242.116.207:9000/api/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
