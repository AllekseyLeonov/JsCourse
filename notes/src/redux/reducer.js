import { combineReducers } from "redux";

import authReducer from "./auth/authReducer";
import signInReducer from "./signInState/signInReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  signIn: signInReducer,
});

export default rootReducer;
