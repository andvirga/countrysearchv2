import * as types from '../actions/actionTypes';

export default function countryReducer(state = [], action) {
  switch (action.type) {
    case types.SEARCH_COUNTRY:
      return [...state, { country: action.payload }];
    default:
      return state;
  }
}
