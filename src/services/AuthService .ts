/* eslint-disable no-console */
import {API_PATH, BASE_DATA_API, PROXY_URL} from '@constants';
import axios, {AxiosResponse} from 'axios';

import api from './axiosConfig';

export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
}

export const loginRequest = (): Promise<AxiosResponse<IAuthResponse>> => {
  return api.get<IAuthResponse>(API_PATH.auth);
};

const login = async () => {
  try {
    const response = await loginRequest();
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
  } catch (err: unknown | Error) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

const checkAuth = async () => {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    const response = await axios.get<IAuthResponse>(
      `${PROXY_URL}/2.0/oauth2/refresh_token/?refresh_token=${refreshToken}&client_id=${BASE_DATA_API.client_id}&client_secret=${BASE_DATA_API.client_secret}`,
      {withCredentials: true},
    );
    localStorage.setItem('token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
  } catch (err: unknown | Error) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};

export const AuthService = {
  login,
  checkAuth,
};
