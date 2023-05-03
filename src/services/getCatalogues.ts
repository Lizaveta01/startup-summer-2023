import {API_PARAMS, API_PATH} from '@constants';
import {ICatalogue} from '@types';
import axios from 'axios';

export const getCatalogues = async (): Promise<ICatalogue[]> => {
  return await axios
    .get(API_PATH.catalogues, {
      headers: {
        'x-secret-key': API_PARAMS['x-secret-key'],
        'X-Api-App-Id': API_PARAMS.client_secret,
      },
    })
    .then((response) => {
      return response.data;
    });
};
