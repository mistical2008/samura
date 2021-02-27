import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  getUserProfile,
  saveUserProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import Login from "../Login/Login";

class ProfileContainer extends Component {
  componentDidMount() {
    this.updateProfile();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.userId !== prevProps.match.params.userId &&
      this.props.profile !== prevProps.profile
    ) {
      this.updateProfile();
    }
  }

  updateProfile() {
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
    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
        saveUserProfile={saveUserProfile}
      />
    );
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
    saveUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
  }),
  withRouter
)(ProfileContainer);
