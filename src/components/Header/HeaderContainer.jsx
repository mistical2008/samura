import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { logout } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
  };
};

export default compose(connect(mapStateToProps, { logout }))(HeaderContainer);
