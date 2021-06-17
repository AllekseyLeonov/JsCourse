import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Menu, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import styles from "../styles";

const RegistrationMenu = ({
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
          Registration
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
        <div className={`${classes.Menu} ${classes.RegistrationMenu}`}>
          <h1
            className={`${classes.CenteredMenuItem} ${classes.RegistrationMenuTitle}`}
          >
            Registration
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            className={classes.RegistrationMenuForm}
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
                name="firstName"
                label="First name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </div>
            <div className={classes.MenuItem}>
              <TextField
                name="lastName"
                label="Last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </div>
            <div className={classes.MenuItem}>
              <TextField
                name="dateOfBirth"
                label="Date of birth"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formik.values.dateOfBirth}
                onChange={formik.handleChange}
                error={
                  formik.touched.dateOfBirth &&
                  Boolean(formik.errors.dateOfBirth)
                }
                helperText={
                  formik.touched.dateOfBirth && formik.errors.dateOfBirth
                }
                autoFocus
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
            <div className={classes.MenuItem}>
              <TextField
                name="confirmPassword"
                label="Confirm password"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </div>
            <div className={classes.CenteredMenuItem}>
              <Button
                className={classes.NotesButtons}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
            <div className={classes.CenteredMenuItem}>
              <Button
                className={classes.NotesButtons}
                variant="contained"
                onClick={() => setIsOnRegistrationProcess(false)}
              >
                Log in
              </Button>
            </div>
          </form>
        </div>
      </Menu>
    </div>
  );
};

RegistrationMenu.propTypes = {
  formik: PropTypes.func,
  setIsOnRegistrationProcess: PropTypes.func,
  anchorEl: PropTypes.element,
  setAnchorEl: PropTypes.func,
};

RegistrationMenu.defaultProps = {
  formik: () => {},
  setIsOnRegistrationProcess: () => {},
  anchorEl: <div />,
  setAnchorEl: () => {},
};

export default RegistrationMenu;
