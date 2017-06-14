// @flow

import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

const searchTermReducer = (state = '', action: Action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

const addApiReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ADD_API_DATA:
      return Object.assign({}, state, {[action.payload.imdbID]: action.payload});
    default:
      return state;
  }
};

const rootReducer =  combineReducers({
  searchTerm: searchTermReducer,
  addApi: addApiReducer
});

export default rootReducer;
