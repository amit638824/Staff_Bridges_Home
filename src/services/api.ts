import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'https://api.staffbridges.com',
  headers: {
    Accept: 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: { response?: { status: number }; message?: string }) => {
    const message = error.response
      ? `HTTP ${error.response.status}`
      : error.message ?? 'Network error';
    return Promise.reject(new Error(message));
  },
);

export default api;
