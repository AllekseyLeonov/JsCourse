import { getYearFromDate } from "./textFormatUtils";

const currentDate = new Date();
const currentYear = currentDate.getUTCFullYear();
const MAX_HUMAN_AGE = 120;
const isYearValid = (year) =>
  year > currentYear - MAX_HUMAN_AGE && year < currentYear;

export const validateRegistrationInfo = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (!/^[a-zA-Z ]+$/.test(values.firstName)) {
    errors.firstName = "Invalid name input";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (!/^[a-zA-Z ]+$/.test(values.lastName)) {
    errors.lastName = "Invalid last name input";
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Required";
  } else if (!isYearValid(getYearFromDate(values.dateOfBirth))) {
    errors.dateOfBirth = "Invalid year input";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(values.password)
  ) {
    errors.password =
      "Password must contain numbers," +
      " latin letters (lower- and uppercase)" +
      " and be at least 6 characters long";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password confirm is invalid";
  }
  return errors;
};

export const validateAuthInfo = (values, data) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (
    !data.data.find(
      (user) => user.email === values.email && user.password === values.password
    )
  ) {
    errors.email = "Such user not found";
  }
  return errors;
};
