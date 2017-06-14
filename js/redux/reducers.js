// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM } from './actions';

const searchTermReducer = (state = '', action: Action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer =  combineReducers({
  searchTerm: searchTermReducer
});

export default rootReducer;
