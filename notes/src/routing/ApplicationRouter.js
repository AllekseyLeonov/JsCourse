import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ROUTES from "../config/constants/ROUTES";
import NotesContainer from "../pages/notes/NotesContainer";
import Error404 from "../pages/errors/Error404";
import SharedNotesContainer from "../pages/sharedNotes/sharedNotesContainer";
import About from "../pages/about/About";
import HeaderMenu from "../components/HeaderMenu";

const ApplicationRouter = ({ isSignIn }) => (
  <div>
    <HashRouter basename="/">
      <HeaderMenu />
      <Switch>
        <Route
          exact
          path={ROUTES.notes}
          component={isSignIn ? NotesContainer : Error404}
        />
        <Route
          exact
          path={ROUTES.sharedNotes}
          component={isSignIn ? SharedNotesContainer : Error404}
        />
        <Route exact path={ROUTES.about} component={About} />
        <Route component={Error404} />
      </Switch>
      <Redirect from="/" to="/notes" />
    </HashRouter>
  </div>
);

const setStateToProps = (state) => ({
  isSignIn: state.signIn.isSignIn,
});

ApplicationRouter.propTypes = {
  isSignIn: PropTypes.bool,
};

ApplicationRouter.defaultProps = {
  isSignIn: false,
};

export default connect(setStateToProps)(ApplicationRouter);
