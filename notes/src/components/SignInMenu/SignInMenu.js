import React, { useState } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  setAuthBirthDate,
  setAuthEmail,
  setAuthFirstName,
  setAuthLastName,
  // eslint-disable-next-line import/no-unresolved
} from "@redux/auth/actions";
import RegistrationMenuContainer from "../RegistrationMenu";
import AuthMenuContainer from "../AuthMenu";

const SignInMenu = ({
  email,
  firstName,
  lastName,
  dateOfBirth,
  setEmail,
  setFirstName,
  setLastName,
  setDateOfBirth,
  setIsAuthorised,
}) => {
  const [isOnRegistrationProcess, setIsOnRegistrationProcess] = useState(false);
  return isOnRegistrationProcess ? (
    <RegistrationMenuContainer
      setIsAuthorised={setIsAuthorised}
      setIsOnRegistrationProcess={setIsOnRegistrationProcess}
      email={email}
      firstName={firstName}
      lastName={lastName}
      dateOfBirth={dateOfBirth}
      setEmail={setEmail}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setDateOfBirth={setDateOfBirth}
    />
  ) : (
    <AuthMenuContainer
      setIsAuthorised={setIsAuthorised}
      setIsOnRegistrationProcess={setIsOnRegistrationProcess}
      setEmail={setEmail}
      setFirstName={setFirstName}
      setLastName={setLastName}
      setDateOfBirth={setDateOfBirth}
    />
  );
};

const setStateToProps = (state) => ({
  email: state.auth.email,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  dateOfBirth: state.auth.dateOfBirth,
});

const setDispatchToProps = (dispatch) => ({
  setEmail: bindActionCreators(setAuthEmail, dispatch),
  setFirstName: bindActionCreators(setAuthFirstName, dispatch),
  setLastName: bindActionCreators(setAuthLastName, dispatch),
  setDateOfBirth: bindActionCreators(setAuthBirthDate, dispatch),
});

SignInMenu.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  setEmail: PropTypes.func,
  setFirstName: PropTypes.func,
  setLastName: PropTypes.func,
  setDateOfBirth: PropTypes.func,
  setIsAuthorised: PropTypes.func,
};

SignInMenu.defaultProps = {
  email: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  setEmail: () => {},
  setFirstName: () => {},
  setLastName: () => {},
  setDateOfBirth: () => {},
  setIsAuthorised: () => {},
};

export default connect(setStateToProps, setDispatchToProps)(SignInMenu);
