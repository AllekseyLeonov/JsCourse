import React from "react";
import { HashRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import HeaderMenu from "@components/HeaderMenu";
// eslint-disable-next-line import/no-unresolved
import ROUTES from "@constants/ROUTES";
import PrivateRoutes from "./PrivateRoutes";
import CommonRoutes from "./CommonRoutes";

const ApplicationRouter = ({ isSignIn }) => (
  <div>
    <HashRouter basename="/">
      <HeaderMenu />
      {isSignIn ? <PrivateRoutes /> : <CommonRoutes />}
      <Redirect from={ROUTES.root} to={ROUTES.notes} />
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
