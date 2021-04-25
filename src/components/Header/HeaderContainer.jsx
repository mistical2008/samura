import { compose } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { logout } from "../../redux/auth-reducer";
import Header from "./Header";
import {
  getIsAuthState,
  getIsFetchingState,
  getLoginState,
} from "../../redux/auth-selectors";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: getLoginState(state),
    isAuth: getIsAuthState(state),
    isFetching: getIsFetchingState(state),
  };
};

export default compose(connect(mapStateToProps, { logout }))(HeaderContainer);
