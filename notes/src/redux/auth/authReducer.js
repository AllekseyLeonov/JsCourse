import ACTION_TYPES from "./ACTION_TYPES";
import { USER_DATA_KEY } from "../../config/constants/LOCAL_STORAGE_KEYS";

const defaultUserData = {
  email: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
};

const userDataFromLocalstorage = localStorage.getItem(USER_DATA_KEY);
const initialState = userDataFromLocalstorage
  ? JSON.parse(userDataFromLocalstorage)
  : defaultUserData;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.AuthChangeEmail:
      return { ...state, email: action.payload };
    case ACTION_TYPES.AuthChangeFirstName:
      return { ...state, firstName: action.payload };
    case ACTION_TYPES.AuthChangeLastName:
      return { ...state, lastName: action.payload };
    case ACTION_TYPES.AuthChangeDateOfBirth:
      return { ...state, dateOfBirth: action.payload };
    default:
      return state;
  }
};

export default authReducer;
