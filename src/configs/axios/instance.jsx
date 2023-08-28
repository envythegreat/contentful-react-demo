import axios from "axios";

// cors anyanywhere https://cors-anywhere.herokuapp.com instead of localhost:8080
axios.defaults.baseURL = "https://cors-anywhere-hazel.vercel.app/glue.uksouth.cloudapp.azure.com";

axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export const instance = axios;
