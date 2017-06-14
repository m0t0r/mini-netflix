import { SET_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
  searchTerm: ''
};

const setSearchTermReducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return Object.assign({}, state, {searchTerm: action.payload});
    default:
      return state;
  }
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return setSearchTermReducer(state, action);
    default:
      return state;
  }
};

export default rootReducer;
