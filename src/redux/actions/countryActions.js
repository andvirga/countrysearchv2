import * as types from './actionTypes';

export function saveFilters(payload) {
  return { type: types.SAVE_FILTERS, payload };
}

export function saveCountries(payload) {
  return { type: types.SAVE_COUNTRIES, payload };
}
