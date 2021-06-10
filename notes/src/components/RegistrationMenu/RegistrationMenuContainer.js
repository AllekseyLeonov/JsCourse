import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import RegistrationMenu from "./RegistrationMenu";
import { USER_DATA_KEY } from "../../config/constants/LOCAL_STORAGE_KEYS";
import { validateRegistrationInfo } from "../../utils/validations";

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

    validate: (values) => validateRegistrationInfo(values),

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
