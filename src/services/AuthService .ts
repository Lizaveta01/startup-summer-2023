/* eslint-disable no-console */
import {API_PARAMS, API_PATH, PROXY_URL} from '@constants';
import {IAuthResponse} from '@types';
import axios from 'axios';

const login = async () => {
  try {
    console.log('api', API_PATH.auth);
    const response: IAuthResponse = await axios
      .get(API_PATH.auth, {
        headers: {
          'x-secret-key': API_PARAMS['x-secret-key'],
        },
      })
      .then((response) => {
        console.log('response', response.data);
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });

    localStorage.setItem('token', response.access_token);
    localStorage.setItem('refresh_token', response.refresh_token);
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
