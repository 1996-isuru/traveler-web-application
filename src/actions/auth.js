import axios from "axios";
import { setAlert } from "./alert";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import setAuthToken from "../utils.js/setAuthToken";
import localhost from "../constants/links";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("./users/auth");
    dispatch({
      type: USER_LOADED,
      playload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//register user
export const register =
  ({ userName, email, password, checked }) =>
  async (dispatch) => {
    console.log("action auth.js file ");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ userName, email, password, checked });
    console.log(userName);
    console.log(password);
    console.log(email);
    console.log(checked);
    console.log(localhost);

    try {
      const res = await axios.post(localhost + "/user/signup", body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        playload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
      }
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

//login user
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    // console.log("auth action");
    // console.log(password);
    // console.log(email);
    try {
      const res = await axios.post(localhost + "/user/login", body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        playload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

//logout user
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
