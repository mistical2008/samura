import { connect } from "react-redux";
import React, { Component } from "react";
import axios from "axios";

import { setUserAuthData, toggleIsFetching } from "../../redux/auth-reducer";
import Header from "./Header";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        const { id, email, login } = response.data.data;
        this.props.toggleIsFetching(false);
        this.props.setUserAuthData(id, email, login);
      })
      .catch((err) => console.log(err));
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
  setUserAuthData,
  toggleIsFetching,
})(HeaderContainer);
