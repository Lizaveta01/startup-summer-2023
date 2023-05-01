/* eslint-disable no-console */
import {API_PARAMS, API_PATH, PROXY_URL} from '@constants';
import {IAuthResponse} from '@types';
import axios, {AxiosResponse} from 'axios';

import api from './axiosConfig';

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
      `${PROXY_URL}/2.0/oauth2/refresh_token/?refresh_token=${refreshToken}&client_id=${API_PARAMS.client_id}&client_secret=${API_PARAMS.client_secret}`,
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
