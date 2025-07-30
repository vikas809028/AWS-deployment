import axios from "axios";


const BASE_URL = 'http://3.110.154.69:5014';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;