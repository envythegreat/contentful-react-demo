import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = ({ baseUrl, isTokenUsed, tokenName }) => {
  const [axiosInstance, setAxiosInstance] = useState(null);
  const instance = axios.create();
  useEffect(() => {
    instance.defaults.baseURL = baseUrl;

    const requestInterceptor = instance.interceptors.request.use(
      async (config) => {
        if (isTokenUsed) {
          const token = localStorage.getItem(tokenName);
          if (token) {
            config.headers = {
              ...config.headers,
              authorization: `Bearer ${token}`,
            };
          }
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Clean up the interceptor when the component unmounts
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, [baseUrl, isTokenUsed, tokenName]);

  return instance;
};

export default useAxios;
