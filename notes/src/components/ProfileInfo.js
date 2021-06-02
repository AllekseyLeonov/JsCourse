import React, { useState } from "react";
import { Menu, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {
  setAuthBirthDate,
  setAuthEmail,
  setAuthFirstName,
  setAuthLastName,
} from "../redux/auth/actions";

const ProfileInfo = ({
  email,
  firstName,
  lastName,
  dateOfBirth,
  setIsAuthorised,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>Profile</Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <Typography variant="h5">{email}</Typography>
          <Typography variant="h5">{firstName}</Typography>
          <Typography variant="h5">{lastName}</Typography>
          <Typography variant="h5">{dateOfBirth}</Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setIsAuthorised(false)}
            fullWidth
          >
            Log out
          </Button>
        </div>
      </Menu>
    </div>
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

ProfileInfo.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  setIsAuthorised: PropTypes.func,
};

ProfileInfo.defaultProps = {
  email: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  setIsAuthorised: () => {},
};

export default connect(setStateToProps, setDispatchToProps)(ProfileInfo);
