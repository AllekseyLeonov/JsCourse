import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import "./styles.css";

const HeaderMenu = () => (
  <AppBar position="static" style={{ backgroundColor: "rgb(196, 116, 69)" }}>
    <Toolbar
      style={{
        justifyContent: "space-around",
        height: "inherit",
        alignItems: "inherit",
      }}
    >
      <Typography variant="h5" className="HeaderItem">
        <NavLink
          to="/notes"
          activeClassName="ActiveNavLink"
          className="NavLink"
        >
          My notes
        </NavLink>
      </Typography>
      <Typography variant="h5" className="HeaderItem">
        <NavLink
          to="/shared-notes"
          activeClassName="ActiveNavLink"
          className="NavLink"
        >
          Shared notes
        </NavLink>
      </Typography>
      <Typography variant="h5" className="HeaderItem">
        <NavLink
          to="/about"
          activeClassName="ActiveNavLink"
          className="NavLink"
        >
          About
        </NavLink>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default HeaderMenu;
