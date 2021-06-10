import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Menu, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import "../styles.css";

const AuthMenu = ({ formik, setIsOnRegistrationProcess }) => {
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
          Log in
        </Typography>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="Menu">
          <h1
            className="CenteredMenuItem"
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
};

AuthMenu.defaultProps = {
  formik: () => {},
  setIsOnRegistrationProcess: () => {},
};

export default AuthMenu;
