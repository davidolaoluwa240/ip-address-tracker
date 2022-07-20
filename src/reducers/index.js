// Modules
import { combineReducers } from "redux";

// Reducers
import searchReducer from "./searchReducer";

export default combineReducers({ search: searchReducer });
