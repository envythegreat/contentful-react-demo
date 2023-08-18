import axios from "axios";

axios.defaults.baseURL = "https://cors-anywhere.herokuapp.com/http://glue.uksouth.cloudapp.azure.com";

axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

export const instance = axios;
