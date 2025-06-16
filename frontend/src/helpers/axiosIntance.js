import axios from "axios";


const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5014/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;