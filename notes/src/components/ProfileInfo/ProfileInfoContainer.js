import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProfileInfo from "./ProfileInfo";

const ProfileInfoContainer = ({
  email,
  firstName,
  lastName,
  dateOfBirth,
  setIsAuthorised,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <ProfileInfo
      email={email}
      firstName={firstName}
      lastName={lastName}
      dateOfBirth={dateOfBirth}
      setIsAuthorised={setIsAuthorised}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
    />
  );
};

const setStateToProps = (state) => ({
  email: state.auth.email,
  firstName: state.auth.firstName,
  lastName: state.auth.lastName,
  dateOfBirth: state.auth.dateOfBirth,
});

ProfileInfoContainer.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  setIsAuthorised: PropTypes.func,
};

ProfileInfoContainer.defaultProps = {
  email: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  setIsAuthorised: () => {},
};

export default connect(setStateToProps)(ProfileInfoContainer);
