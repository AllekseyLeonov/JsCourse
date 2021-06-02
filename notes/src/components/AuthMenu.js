import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Menu } from "@material-ui/core";
import PropTypes from "prop-types";

const AuthMenu = ({ formik, setIsOnRegistrationProcess }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>Log in</Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <h1>Sign in</h1>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            wrap: "nowrap",
          }}
        >
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
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => setIsOnRegistrationProcess(true)}
          >
            Create new account
          </Button>
        </form>
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
