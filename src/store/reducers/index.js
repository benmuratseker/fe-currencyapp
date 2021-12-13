import { combineReducers } from "redux";
import CurrencyReducer from "./currencyReducer";

const reducers = combineReducers({
  Test: CurrencyReducer,
  //other reducers come here...
});

export default reducers;
