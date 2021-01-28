import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Login from "../Login/Login";

class ProfileContainer extends Component {
  componentDidMount() {
    let { history, match, myId, getUserProfile, getUserStatus } = this.props;
    let userId = match.params.userId ? match.params.userId : myId;

    if (!userId) {
      history.push("/login");
    }

    getUserProfile(userId);
    getUserStatus(userId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Login />;
    }
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
  }),
  withRouter
)(ProfileContainer);
