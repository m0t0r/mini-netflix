// @flow

import axios from 'axios';
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

export function getApiData(imdbID: string) {
  return (dispatch: Function) => {
    axios.get(`http://localhost:3000/${imdbID}`)
      .then((res: {data: {rating: string}}) => dispatch(addApiDataAction(res.data)))
      .catch(err => console.error('Error: ', err)); // eslint-disable-line no-console
  }
}
