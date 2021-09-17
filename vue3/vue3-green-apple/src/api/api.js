import axios from "axios";

let Api = axios.create({
  baseURL: "http://api.mv.com",
});

Api.defaults.headers.post["Content-Type"] = "application/json";
Api.defaults.withCredentials = true;

export default Api;
