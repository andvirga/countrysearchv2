import * as types from './actionTypes';

export function searchCountry(payload) {
  return { type: types.SEARCH_COUNTRY, payload };
}

export function saveCountries(payload) {
  return { type: types.SAVE_COUNTRIES, payload };
}
