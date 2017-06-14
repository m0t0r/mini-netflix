import { SET_SEARCH_TERM } from './actions';

export function setSearchTermAction(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}
