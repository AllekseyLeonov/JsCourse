import React from "react";
import { Menu, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import styles from "../styles";

const ProfileInfo = ({
  email,
  firstName,
  lastName,
  dateOfBirth,
  setIsAuthorised,
  anchorEl,
  setAnchorEl,
}) => {
  const classes = styles();

  return (
    <Box className={classes.SignButtonBox}>
      <Button
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <Typography variant="h5" className={classes.SignButton}>
          Profile
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
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

ProfileInfo.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  setIsAuthorised: PropTypes.func,
  anchorEl: PropTypes.element,
  setAnchorEl: PropTypes.func,
};

ProfileInfo.defaultProps = {
  email: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  setIsAuthorised: () => {},
  anchorEl: <div />,
  setAnchorEl: () => {},
};

export default ProfileInfo;
