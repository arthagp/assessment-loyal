import axios from "axios";

const instance = axios.create({ baseURL: "https://apiw.looyal.id/sample" });

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["X-Auth-Token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
