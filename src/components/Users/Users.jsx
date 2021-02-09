import User from "../User/User";
import Pagination from "../Pagination/Pagination";
import React from "react";

const Users = ({
  usersCount,
  usersPerPage,
  currentPage,
  onPageChanged,
  users,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        usersCount={usersCount}
        usersPerPage={usersPerPage}
        onPageChanged={onPageChanged}
      ></Pagination>
      <ul>
        {users.map((user) => (
          <User
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          ></User>
        ))}
      </ul>
    </div>
  );
};

export default Users;
