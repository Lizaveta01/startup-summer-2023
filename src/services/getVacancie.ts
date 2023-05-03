import {API_PARAMS, API_PATH} from '@constants';
import {IVacancy} from '@types';
import axios from 'axios';

export const getVacancy = async (vacancyID: string): Promise<IVacancy> => {
  return await axios
    .get(`${API_PATH.vacancies}${vacancyID}`, {
      headers: {
        'x-secret-key': API_PARAMS['x-secret-key'],
        'X-Api-App-Id': API_PARAMS.client_secret,
      },
    })
    .then((response) => response.data);
};
