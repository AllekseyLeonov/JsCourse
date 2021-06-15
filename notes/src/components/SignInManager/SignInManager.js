import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// eslint-disable-next-line import/no-unresolved
import setSignInState from "@redux/signInState/actions";
import ProfileInfo from "../ProfileInfo";
import SignInMenu from "../SignInMenu";

const SignInManager = ({ isSignIn, setIsSignIn }) =>
  isSignIn ? (
    <ProfileInfo setIsAuthorised={setIsSignIn} />
  ) : (
    <SignInMenu setIsAuthorised={setIsSignIn} />
  );

const setStateToProps = (state) => ({
  isSignIn: state.signIn.isSignIn,
});

const setDispatchToProps = (dispatch) => ({
  setIsSignIn: bindActionCreators(setSignInState, dispatch),
});

SignInManager.propTypes = {
  isSignIn: PropTypes.bool,
  setIsSignIn: PropTypes.func,
};

SignInManager.defaultProps = {
  isSignIn: false,
  setIsSignIn: () => {},
};

export default connect(setStateToProps, setDispatchToProps)(SignInManager);
