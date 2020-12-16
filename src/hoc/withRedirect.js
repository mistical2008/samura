import { connect } from "react-redux";
import React from "react";
import Login from "../components/Login/Login";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withRedirect = (Component) => {
  const withLoginRedirect = (props) => {
    if (!props.isAuth) return <Login />;
    return <Component {...props} />;
  };

  return connect(mapStateToProps)(withLoginRedirect);
};
