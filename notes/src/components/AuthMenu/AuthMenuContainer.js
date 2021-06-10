import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import axios from "axios";
import { useFormik } from "formik";

import AuthMenu from "./AuthMenu";
import { USER_DATA_KEY } from "../../config/constants/LOCAL_STORAGE_KEYS";
import userApi from "../../config/constants/API_CONFIG";
import { validateAuthInfo } from "../../utils/validations";

const AuthMenuContainer = ({
  email,
  setEmail,
  setFirstName,
  setLastName,
  setDateOfBirth,
  setIsAuthorised,
  setIsOnRegistrationProcess,
}) => {
  const { data } = useQuery("users", () => axios(userApi));

  const formik = useFormik({
    initialValues: {
      email,
      password: "",
    },

    validate: (values) => validateAuthInfo(values, data),

    onSubmit: (values, actions) => {
      const userData = data.data.filter(
        (user) =>
          user.email === values.email && user.password === values.password
      )[0];

      setEmail(userData.email);
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setDateOfBirth(userData.dateOfBirth);

      localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));

      setIsAuthorised(true);
      actions.setSubmitting(false);
    },
  });

  return (
    <AuthMenu
      formik={formik}
      setIsOnRegistrationProcess={setIsOnRegistrationProcess}
    />
  );
};

AuthMenuContainer.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setDateOfBirth: PropTypes.func,
  setIsAuthorised: PropTypes.func,
  setIsOnRegistrationProcess: PropTypes.func,
};

AuthMenuContainer.defaultProps = {
  email: "",
  setEmail: () => {},
  setFirstName: () => {},
  setLastName: () => {},
  setDateOfBirth: () => {},
  setIsAuthorised: () => {},
  setIsOnRegistrationProcess: () => {},
};

export default AuthMenuContainer;
