import axios from "axios";

const base_url = import.meta.env.VITE_BACKEND_URL;

const apiClient = axios.create({
  baseURL: base_url,
});

apiClient.interceptors.request.use(async (config) => {
  config.headers["X_API_KEY"] = import.meta.env.VITE_APP_API_KEY;
  return config;
});

export default apiClient;
