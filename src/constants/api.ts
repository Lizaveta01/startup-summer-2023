export const BASE_URL = 'https://api.superjob.ru';
export const PROXY_URL = 'https://startup-summer-2023-proxy.onrender.com';

export const API_PARAMS = {
  login: 'sergei.stralenia@gmail.com',
  password: 'paralect123',
  client_id: 2356,
  client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  hr: 0,
  'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
};

export const API_PATH = {
  auth: `${PROXY_URL}/2.0/oauth2/password/?login=${API_PARAMS.login}&password=${API_PARAMS.password}&client_id=${API_PARAMS.client_id}&client_secret=${API_PARAMS.client_secret}&hr=${API_PARAMS.hr}`,
  catalogues: `${PROXY_URL}/2.0/catalogues/`,
  vacancies: `${PROXY_URL}/2.0/vacancies/`,
};
