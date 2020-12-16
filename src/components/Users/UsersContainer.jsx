import { connect } from "react-redux";
import React, { Component } from "react";
import {
  changePage,
  follow,
  getUsers,
  unfollow,
} from "../../redux/users-reducer";
import { withRedirect } from "../../hoc/withRedirect";
import Preloader from "../Preloader/Preloader";
import Users from "./Users";
import { compose } from "redux";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.usersPerPage, this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.usersPerPage, pageNumber);
    this.props.changePage(pageNumber);
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

export default compose(
  withRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    changePage,
  })
)(UsersContainer);
