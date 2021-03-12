import { SET_AUTH, SET_LOGGED_OUT } from "../actionTypes";

export const setAuth = profile => ({
  type: SET_AUTH,
  payload: {
    profile: profile,
  }
});

export const setLoggedOut = () => ({ type: SET_LOGGED_OUT });