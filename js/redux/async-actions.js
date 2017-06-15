// @flow

import axios from 'axios';
import { addApiDataAction } from './action-creators'

export default function getApiData(imdbID: string) {
  return (dispatch: Function) => {
    axios.get(`http://localhost:3000/${imdbID}`)
      .then((res: {data: {rating: string}}) => dispatch(addApiDataAction(res.data)))
      .catch(err => console.error('Error: ', err)); // eslint-disable-line no-console
  }
}
