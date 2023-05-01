import {API_PARAMS, PROXY_URL} from '@constants';
import {IAuthResponse} from '@types';
import axios from 'axios';

export const api = axios.create({
  withCredentials: true,
  baseURL: PROXY_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.statusCode === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.get<IAuthResponse>(
          `${PROXY_URL}/2.0/oauth2/refresh_token/?refresh_token=${refreshToken}&client_id=${API_PARAMS.client_id}&client_secret=${API_PARAMS.client_secret}`,
          {withCredentials: true},
        );
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        return api.request(originalRequest);
      } catch (err: unknown | Error) {
        if (err instanceof Error) {
          // eslint-disable-next-line no-console
          console.log(err.message);
        }
      }
    }
  },
);

export default api;
