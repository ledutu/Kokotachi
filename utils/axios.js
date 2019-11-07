import axios from 'axios';
const API_URL = "https://admin.kokotachi.com";

export const CancelToken = axios.CancelToken;

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: API_URL,
});

export default axiosInstance;