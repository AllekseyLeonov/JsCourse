import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Menu, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import "../styles.css";

const RegistrationMenu = ({ formik, setIsOnRegistrationProcess }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="SignButtonBox">
      <Button onClick={handleClick}>
        <Typography variant="h5" className="SignButton">
          Registration
        </Typography>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="Menu" style={{ width: "300px" }}>
          <h1
            className="CenteredMenuItem"
            style={{ color: "rgb(196, 116, 69)" }}
          >
            Registration
          </h1>
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className="MenuItem">
              <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                style={{ width: "100%" }}
              />
            </div>
            <div className="MenuItem">
              <TextField
                name="firstName"
                label="First name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                style={{ width: "100%" }}
              />
            </div>
            <div className="MenuItem">
              <TextField
                name="lastName"
                label="Last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                style={{ width: "100%" }}
              />
            </div>
            <div className="MenuItem" style={{ width: "100%" }}>
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
                style={{ width: "100%" }}
                autoFocus
              />
            </div>
            <div className="MenuItem">
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
                style={{ width: "100%" }}
              />
            </div>
            <div className="MenuItem">
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
                style={{ width: "100%" }}
              />
            </div>
            <div className="CenteredMenuItem" style={{ padding: "5px 0" }}>
              <Button
                style={{
                  backgroundColor: "rgba(196, 116, 69, 0.7)",
                  color: "white",
                }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
            <div className="CenteredMenuItem" style={{ padding: "5px 0" }}>
              <Button
                style={{
                  backgroundColor: "rgba(196, 116, 69, 0.7)",
                  color: "white",
                }}
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
};

RegistrationMenu.defaultProps = {
  formik: () => {},
  setIsOnRegistrationProcess: () => {},
};

export default RegistrationMenu;
