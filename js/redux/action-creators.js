// @flow

import { SET_SEARCH_TERM } from './actions';

export function setSearchTermAction(searchTerm: string) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}
