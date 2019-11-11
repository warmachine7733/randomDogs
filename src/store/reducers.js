import { combineReducers } from "redux";

import { category } from "./intro/reducer";
import { home } from "./home/reducer";

const appReducer = combineReducers({ category, home });
export default appReducer;
