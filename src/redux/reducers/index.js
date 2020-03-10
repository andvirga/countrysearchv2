import { combineReducers } from 'redux';
import country from './countryReducer';

const rootReducer = combineReducers({
  country,
});

export default rootReducer;
