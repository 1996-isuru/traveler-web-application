import { combineReducers } from "redux";
// import { routerStateReducer } from 'redux-router';
import alert from "./alert";
import auth from "./auth";

const rootreducer = combineReducers({
  alert,
  auth,
});

export default rootreducer;
