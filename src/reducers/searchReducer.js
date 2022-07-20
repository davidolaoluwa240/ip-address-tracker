// Action Types
import { SEARCH_ADDRESS_LOADING, GET_ADDRESS_INFO } from "../actions/types";

// Search Reducer Initial state
const INITIAL_STATE = { loading: false, data: {} };

const searchReducer = function (search = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_ADDRESS_LOADING:
      return { ...search, loading: action.payload };
    case GET_ADDRESS_INFO:
      return { ...search, data: action.payload };
    default:
      return search;
  }
};

export default searchReducer;
