import {API_PARAMS, API_PATH} from '@constants';
import {IVacancyResponse} from '@types';
import axios from 'axios';

export const getVacancies = async (
  searh?: string,
  payment_from?: number,
  payment_to?: number,
  catalogues?: number,
): Promise<IVacancyResponse> => {
  return await axios
    .get(`${API_PATH.vacancies}`, {
      headers: {
        'x-secret-key': API_PARAMS['x-secret-key'],
        'X-Api-App-Id': API_PARAMS.client_secret,
      },
    })
    .then((response) => response.data);
};
///?published=1&keyword=${searh}&payment_from=${payment_from}&payment_to=${payment_to}&catalogues=${catalogues}/
