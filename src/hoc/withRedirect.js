import { connect } from "react-redux";
import React from "react";
import Login from "../components/Login/Login";
import { getIsAuthState } from "../redux/auth-selectors";

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthState(state),
  };
};

export const withRedirect = (Component) => {
  const withLoginRedirect = (props) => {
    if (!props.isAuth) return <Login />;
    return <Component {...props} />;
  };

  return connect(mapStateToProps)(withLoginRedirect);
};
