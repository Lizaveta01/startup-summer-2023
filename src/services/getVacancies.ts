import {API_PARAMS, API_PATH} from '@constants';
import {IFilters, IVacancyResponse} from '@types';
import axios from 'axios';

export const getVacancies = async ({
  search = '',
  payment_from = '',
  payment_to = '',
  catalogues = '',
}: IFilters = {}): Promise<IVacancyResponse> => {
  return await axios
    .get(
      `${API_PATH.vacancies}?keyword=${search}&catalogues=${catalogues}&payment_from=${payment_from}&payment_to=${payment_to}`,
      {
        headers: {
          'x-secret-key': API_PARAMS['x-secret-key'],
          'X-Api-App-Id': API_PARAMS.client_secret,
        },
      },
    )
    .then((response) => response.data);
};
