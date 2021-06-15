import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import styles from "../styles";
import ROUTES from "../../config/constants/ROUTES";
import SignInManager from "../SignInManager";

const HeaderMenu = () => {
  const classes = styles();
  return (
    <AppBar position="static" className={classes.HeaderMenuAppBar}>
      <Toolbar className={classes.HeaderMenuToolBar}>
        <Typography variant="h5" className={classes.HeaderItem}>
          <NavLink
            to={ROUTES.notes}
            activeClassName="ActiveNavLink"
            className={classes.NavLink}
          >
            My notes
          </NavLink>
        </Typography>
        <Typography variant="h5" className={classes.HeaderItem}>
          <NavLink
            to={ROUTES.sharedNotes}
            activeClassName="ActiveNavLink"
            className={classes.NavLink}
          >
            Shared notes
          </NavLink>
        </Typography>
        <Typography variant="h5" className={classes.HeaderItem}>
          <NavLink
            to={ROUTES.about}
            activeClassName="ActiveNavLink"
            className={classes.NavLink}
          >
            About
          </NavLink>
        </Typography>
        <SignInManager />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMenu;
