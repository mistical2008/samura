import { connect } from "react-redux";
import React, { Component } from "react";
import {
  changePage,
  setCurrentSection,
  follow,
  getUsers,
  unfollow,
} from "../../redux/users-reducer";
import { withRedirect } from "../../hoc/withRedirect";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";
import { compose } from "redux";
import {
  getAllUsersState,
  getCurrentPageState,
  getCurrentSectionState,
  getSectionSizeState,
  getUsersCountState,
  getUsersPerPageState,
  getIsFetchingState,
  getFollowingInProgressState,
} from "../../redux/users-selectors";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersPerPage, this.props.currentPage);
  }

  onPageChanged = (pageNumber, sectionNumber) => {
    this.props.getUsers(this.props.usersPerPage, pageNumber);
    this.props.changePage(pageNumber);
    this.props.setCurrentSection(sectionNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            usersCount={this.props.usersCount}
            usersPerPage={this.props.usersPerPage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            followingInProgress={this.props.followingInProgress}
            currentSection={this.props.currentSection}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getAllUsersState(state),
    currentPage: getCurrentPageState(state),
    currentSection: getCurrentSectionState(state),
    sectionSize: getSectionSizeState(state),
    usersCount: getUsersCountState(state),
    usersPerPage: getUsersPerPageState(state),
    isFetching: getIsFetchingState(state),
    followingInProgress: getFollowingInProgressState(state),
  };
};

export default compose(
  withRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    changePage,
    setCurrentSection,
  })
)(UsersContainer);
