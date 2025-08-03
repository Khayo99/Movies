import axios from 'axios';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BACK}`,
  timeout: 10000,
  headers: defaultHeaders,
});
