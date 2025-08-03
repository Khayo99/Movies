import axios from 'axios';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: defaultHeaders,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: 'pt-BR',
  },
});
