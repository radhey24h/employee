import axios from "axios";

export default axios.create({
  //baseURL: "http://20.204.176.158:8080/api",
  baseURL: "https://localhost:44352/api",
  headers: {
    "Content-type": "application/json"
  }
});