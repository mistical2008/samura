import User from "../User/User";
import Pagination from "../Pagination/Pagination";
import s from "./Users.module.css";
import React from "react";

const Users = ({
  usersCount,
  usersPerPage,
  currentPage,
  currentSection,
  onPageChanged,
  users,
  followingInProgress,
  follow,
  unfollow,
  sectionSize,
}) => {
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        currentSection={currentSection}
        usersCount={usersCount}
        usersPerPage={usersPerPage}
        onPageChanged={onPageChanged}
        sectionSize={sectionSize}
      ></Pagination>
      <ul className={s.usersList}>
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
