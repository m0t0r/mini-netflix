// @flow

import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTermAction(searchTerm: string) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function addApiDataAction(apiData: Show) {
  return {
    type: ADD_API_DATA,
    payload: apiData
  };
}


