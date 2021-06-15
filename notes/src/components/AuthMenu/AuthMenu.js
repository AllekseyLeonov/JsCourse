import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Menu, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "../styles";

const AuthMenu = ({
  formik,
  setIsOnRegistrationProcess,
  anchorEl,
  setAnchorEl,
}) => {
  const classes = styles();

  return (
    <div className={classes.SignButtonBox}>
      <Button
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <Typography variant="h5" className={classes.SignButton}>
          Log in
        </Typography>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <div className={classes.Menu}>
          <h1
            className={classes.CenteredMenuItem}
            style={{ color: "rgb(196, 116, 69)" }}
          >
            Sign in
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              wrap: "nowrap",
            }}
          >
            <div className={classes.MenuItem}>
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div className={classes.MenuItem}>
              <TextField
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
            <div className={classes.CenteredMenuItem}>
              <Button
                className={classes.NotesButton}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
            <div className={classes.CenteredMenuItem}>
              <Button
                className={classes.NotesButton}
                variant="contained"
                onClick={() => setIsOnRegistrationProcess(true)}
              >
                Create new account
              </Button>
            </div>
          </form>
        </div>
      </Menu>
    </div>
  );
};

AuthMenu.propTypes = {
  formik: PropTypes.func,
  setIsOnRegistrationProcess: PropTypes.func,
  anchorEl: PropTypes.element,
  setAnchorEl: PropTypes.func,
};

AuthMenu.defaultProps = {
  formik: () => {},
  setIsOnRegistrationProcess: () => {},
  anchorEl: <div />,
  setAnchorEl: () => {},
};

export default AuthMenu;
