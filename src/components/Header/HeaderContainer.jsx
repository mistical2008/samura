import { connect } from "react-redux";
import React, { Component } from "react";

import { getUserAuthData } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getUserAuthData();
  }

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

export default connect(mapStateToProps, {
  getUserAuthData,
})(HeaderContainer);
