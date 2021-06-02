import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import RegistrationMenu from "./RegistrationMenu";
import { USER_DATA_KEY } from "../config/constants/LOCAL_STORAGE_KEYS";
import { getYearFromDate } from "../utils/textFormatUtils";

const currentDate = new Date();
const currentYear = currentDate.getUTCFullYear();
const MAX_HUMAN_AGE = 120;
const isYearValid = (year) =>
  year > currentYear - MAX_HUMAN_AGE && year < currentYear;

const RegistrationMenuContainer = ({
  email,
  firstName,
  lastName,
  dateOfBirth,
  setEmail,
  setFirstName,
  setLastName,
  setDateOfBirth,
  setIsAuthorised,
  setIsOnRegistrationProcess,
}) => {
  const formik = useFormik({
    initialValues: {
      email,
      firstName,
      lastName,
      dateOfBirth,
      password: "",
      confirmPassword: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
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
        !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(
          values.password
        )
      ) {
        errors.password =
          "Password must contain numbers, latin letters (lower- and uppercase) and be at least 6 characters long";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password confirm is invalid";
      }
      return errors;
    },

    onSubmit: (values, actions) => {
      const userData = {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        dateOfBirth: values.dateOfBirth,
      };
      setEmail(userData.email);
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setDateOfBirth(userData.dateOfBirth);

      localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

      actions.setSubmitting(false);

      setIsAuthorised(true);
      setIsOnRegistrationProcess(false);
    },
  });

  return (
    <RegistrationMenu
      formik={formik}
      setIsOnRegistrationProcess={setIsOnRegistrationProcess}
    />
  );
};

RegistrationMenuContainer.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  setEmail: PropTypes.func,
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setDateOfBirth: PropTypes.func,
  setIsAuthorised: PropTypes.func,
  setIsOnRegistrationProcess: PropTypes.func,
};

RegistrationMenuContainer.defaultProps = {
  email: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  setEmail: () => {},
  setFirstName: () => {},
  setLastName: () => {},
  setDateOfBirth: () => {},
  setIsAuthorised: () => {},
  setIsOnRegistrationProcess: () => {},
};

export default RegistrationMenuContainer;
