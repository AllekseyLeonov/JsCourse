import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";

// eslint-disable-next-line import/no-unresolved
import { USER_DATA_KEY } from "@constants/LOCAL_STORAGE_KEYS";
// eslint-disable-next-line import/no-unresolved
import { useGetUser } from "@constants/API_CONFIG";
// eslint-disable-next-line import/no-unresolved
import { validateAuthInfo } from "@utils/validations";
import AuthMenu from "./AuthMenu";

const AuthMenuContainer = ({
  email,
  setEmail,
  setFirstName,
  setLastName,
  setDateOfBirth,
  setIsAuthorised,
  setIsOnRegistrationProcess,
}) => {
  const { data: user } = useGetUser();
  const [anchorEl, setAnchorEl] = useState(null);

  const formik = useFormik({
    initialValues: {
      email,
      password: "",
    },

    validate: (values) => validateAuthInfo(values, user),

    onSubmit: (values, actions) => {
      const currentUserData = user.data.filter(
        (userData) =>
          userData.email === values.email &&
          userData.password === values.password
      )[0];

      setEmail(currentUserData.email);
      setFirstName(currentUserData.firstName);
      setLastName(currentUserData.lastName);
      setDateOfBirth(currentUserData.dateOfBirth);

      localStorage.setItem(USER_DATA_KEY, JSON.stringify(currentUserData));

      setIsAuthorised(true);
      actions.setSubmitting(false);
    },
  });

  return (
    <AuthMenu
      formik={formik}
      setIsOnRegistrationProcess={setIsOnRegistrationProcess}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
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
