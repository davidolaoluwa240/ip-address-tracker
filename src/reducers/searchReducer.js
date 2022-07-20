// Action Types
import { SEARCH_LOADING, SEARCH_LOADED } from "../actions/types";

// Search Reducer Initial state
const INITIAL_STATE = { loading: false, searchDetail: {} };

const searchReducer = function (search = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_LOADING:
      return { ...search, loading: action.payload };
    case SEARCH_LOADED:
      return { ...search, searchDetail: action.payload };
    default:
      return search;
  }
};

export default searchReducer;
