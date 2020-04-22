import * as types from '../actions/actionTypes';

export default function countryReducer(state = [], action) {
  switch (action.type) {
    case types.SAVE_FILTERS:
      return { ...state, filter: action.payload };
    case types.SAVE_COUNTRIES:
      return { ...state, countries: [...action.payload] };
    default:
      return state;
  }
}
