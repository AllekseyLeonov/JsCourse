import React, { useState } from "react";
import { Menu, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import "../styles.css";

import {
  setAuthBirthDate,
  setAuthEmail,
  setAuthFirstName,
  setAuthLastName,
} from "../../redux/auth/actions";

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
    <Box className="SignButtonBox">
      <Button onClick={handleClick}>
        <Typography variant="h5" className="SignButton">
          Profile
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box className="Menu">
          <AccountCircleIcon className="ProfileIcon MenuItem CenteredMenuItem" />
          <Typography variant="h5" className="MenuItem">
            Mail: {email}
          </Typography>
          <Typography variant="h5" className="MenuItem">
            Name: {firstName}
          </Typography>
          <Typography variant="h5" className="MenuItem">
            Surname: {lastName}
          </Typography>
          <Typography variant="h5" className="MenuItem">
            Date of birth: {dateOfBirth}
          </Typography>
          <Button
            className="MenuItem CenteredMenuItem"
            style={{
              backgroundColor: "rgba(196, 116, 69, 0.7)",
              color: "white",
            }}
            variant="contained"
            onClick={() => setIsAuthorised(false)}
          >
            Log out
          </Button>
        </Box>
      </Menu>
    </Box>
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
