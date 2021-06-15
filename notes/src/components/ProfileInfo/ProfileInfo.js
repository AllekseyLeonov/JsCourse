import React, { useState } from "react";
import { Menu, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
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
import styles from "../styles";

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

  const classes = styles();

  return (
    <Box className={classes.SignButtonBox}>
      <Button onClick={handleClick}>
        <Typography variant="h5" className={classes.SignButton}>
          Profile
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box className={classes.Menu}>
          <AccountCircleIcon
            className={`${classes.ProfileIcon} ${classes.MenuItem} ${classes.CenteredMenuItem}`}
          />
          <Typography variant="h5" className={classes.MenuItem}>
            Mail: {email}
          </Typography>
          <Typography variant="h5" className={classes.MenuItem}>
            Name: {firstName}
          </Typography>
          <Typography variant="h5" className={classes.MenuItem}>
            Surname: {lastName}
          </Typography>
          <Typography variant="h5" className={classes.MenuItem}>
            Date of birth: {dateOfBirth}
          </Typography>
          <Button
            className={`${classes.NotesButtons} ${classes.MenuItem} ${classes.CenteredMenuItem}`}
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
