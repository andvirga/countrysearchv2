import axios from 'axios';
import { handleResponse, handleError } from './apiUtils';

export const SearchCountry = ({ countryName, population }) => {
  return axios
    .get(
      `https://jsonmock.hackerrank.com/api/countries/search?name=${countryName}&p=${population}`,
    )
    .then(handleResponse)
    .catch(handleError);
};
