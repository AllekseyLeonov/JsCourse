import ACTION_TYPES from "./ACTION_TYPES";

const setSignInState = (isSignIn) => ({
  type: ACTION_TYPES.changeSigInState,
  payload: isSignIn,
});

export default setSignInState;
