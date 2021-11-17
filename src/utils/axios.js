import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use((response) => response, (error) => {
  throw error;
});

export default axiosInstance;