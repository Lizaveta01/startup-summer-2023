export const BASE_URL = 'https://api.superjob.ru';
export const PROXY_URL = 'https://startup-summer-2023-proxy.onrender.com';

export const BASE_DATA_API = {
  login: 'sergei.stralenia@gmail.com',
  password: 'paralect123',
  client_id: 2356,
  client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  hr: 0,
};

export const API_PATH = {
  auth: `/2.0/oauth2/password/?login=${BASE_DATA_API.login}&password=${BASE_DATA_API.password}&client_id=${BASE_DATA_API.client_id}&client_secret=v${BASE_DATA_API.client_secret}&hr=${BASE_DATA_API.hr}`,
  catalogues: '/2.0/catalogues/',
  vacancies: '2.0/vacancies/',
};
