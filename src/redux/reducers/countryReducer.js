import * as types from '../actions/actionTypes';

export default function countryReducer(state = [], action) {
  switch (action.type) {
    case types.SEARCH_COUNTRY:
      return [...state, { filter: action.payload }];
    case types.SAVE_COUNTRIES:
      return [...state, { countries: action.payload }];
    case types.ADD_TODO_ITEM:
      return [...state, { todos: action.payload }];
    default:
      return state;
  }
}
