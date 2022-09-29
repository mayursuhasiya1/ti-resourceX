import axios from "axios";
export default axios.create({
  baseURL: "http://103.242.116.207:9000/api/auth/",
});