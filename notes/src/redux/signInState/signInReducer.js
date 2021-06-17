// eslint-disable-next-line import/no-unresolved
import { USER_DATA_KEY } from "@constants/localStorageKeys";
import ACTION_TYPES from "./ACTION_TYPES";

const defaultState = {
  isSignIn: Boolean(localStorage.getItem(USER_DATA_KEY)),
};

const signInReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TYPES.changeSigInState:
      return { ...state, isSignIn: action.payload };
    default:
      return state;
  }
};

export default signInReducer;
