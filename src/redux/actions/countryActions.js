import * as types from './actionTypes';

export function searchCountry(payload) {
  return { type: types.SEARCH_COUNTRY, payload };
}
