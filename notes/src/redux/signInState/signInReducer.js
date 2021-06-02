import ACTION_TYPES from "./ACTION_TYPES";
import { USER_DATA_KEY } from "../../config/constants/LOCAL_STORAGE_KEYS";

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
