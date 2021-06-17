import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import Routes from "@constants/routes";
import SignInManager from "../SignInManager";
import styles from "../styles";

const HeaderMenu = () => {
  const classes = styles();
  return (
    <AppBar position="static" className={classes.HeaderMenuAppBar}>
      <Toolbar className={classes.HeaderMenuToolBar}>
        <Typography variant="h5" className={classes.HeaderItem}>
          <NavLink
            to={Routes.notes}
            activeClassName={classes.ActiveNavLink}
            className={classes.NavLink}
          >
            My notes
          </NavLink>
        </Typography>
        <Typography variant="h5" className={classes.HeaderItem}>
          <NavLink
            to={Routes.sharedNotes}
            activeClassName={classes.ActiveNavLink}
            className={classes.NavLink}
          >
            Shared notes
          </NavLink>
        </Typography>
        <Typography variant="h5" className={classes.HeaderItem}>
          <NavLink
            to={Routes.about}
            activeClassName={classes.ActiveNavLink}
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