import { connect } from "react-redux";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import axios from "axios";

import { setUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : 2;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, {
  setUserProfile,
})(ProfileContainerWithRouter);
