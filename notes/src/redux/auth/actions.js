import ACTION_TYPES from "./ACTION_TYPES";

export const setAuthEmail = (newEmail) => ({
  type: ACTION_TYPES.AuthChangeEmail,
  payload: newEmail,
});

export const setAuthFirstName = (newFirstName) => ({
  type: ACTION_TYPES.AuthChangeFirstName,
  payload: newFirstName,
});

export const setAuthLastName = (newLastName) => ({
  type: ACTION_TYPES.AuthChangeLastName,
  payload: newLastName,
});

export const setAuthBirthDate = (newBirthDate) => ({
  type: ACTION_TYPES.AuthChangeDateOfBirth,
  payload: newBirthDate,
});
