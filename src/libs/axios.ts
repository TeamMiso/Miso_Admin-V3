import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

export default axiosInstance;
