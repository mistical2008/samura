import { connect } from "react-redux";
import React, { Component } from "react";
import * as axios from "axios";
import {
  followAC,
  setCurrentPageAC,
  setUsersCountAC,
  setUsersAC,
  unfollowAC,
  setUsersPerPageAC,
} from "../../redux/users-reducer";
import Users from "./Users";

class UsersAPI extends Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      })
      .catch((err) => console.log(err));
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Users
        usersCount={this.props.usersCount}
        usersPerPage={this.props.usersPerPage}
        currentPage={this.props.currentPage}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersCount: state.usersPage.usersCount,
    usersPerPage: state.usersPage.usersPerPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setUsersCount: (count) => {
      dispatch(setUsersCountAC(count));
    },
    setUsersPerPage: (count) => {
      dispatch(setUsersPerPageAC(count));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI);
