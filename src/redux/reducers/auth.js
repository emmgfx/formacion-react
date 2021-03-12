import { SET_AUTH, SET_LOGGED_OUT } from "../actionTypes";

const initialState = {
  logged: false,
  profile: null,
}

export default function(state = initialState, action){
  switch(action.type){
    case SET_AUTH: {
      const { profile } = action.payload;
      return {
        ...state,
        logged: true,
        profile: profile,
      };
    }
    case SET_LOGGED_OUT: {
      return {
        ...state,
        logged: false,
        profile: null,
      };
    }
    default:
      return state;
  }
}