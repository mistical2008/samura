import { connect } from "react-redux";
import React, { Component } from "react";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  setUsersPerPage,
  toggleIsFetching,
  toggleFollowingInProgress,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../api/usersAPI"

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.usersPerPage, this.props.currentPage)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersCount(data.totalCount);
      })
      .catch((err) => console.log(err));
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.usersPerPage, pageNumber)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      })
      .catch((err) => console.log(err));
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
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersCount: state.usersPage.usersCount,
    usersPerPage: state.usersPage.usersPerPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  setUsersPerPage,
  toggleIsFetching,
  toggleFollowingInProgress,
})(UsersContainer);
