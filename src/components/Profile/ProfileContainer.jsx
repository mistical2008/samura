import { connect } from "react-redux";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { getUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : 2;

    this.props.getUserProfile(userId);
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
  getUserProfile,
})(ProfileContainerWithRouter);
