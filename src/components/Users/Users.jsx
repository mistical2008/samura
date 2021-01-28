import React from "react";
import s from "./Users.module.css";
import defAvatar from "../../assets/user-1.png";
import { NavLink } from "react-router-dom";

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
  let pagesCount = Math.ceil(usersCount / usersPerPage);

  return (
    <div>
      <ul className={s.pagination}>
        {[...Array(pagesCount)].map((_, index) => {
          let number = index + 1;
          return (
            <li
              className={
                (number === currentPage && s.paginationActiveItem) +
                " " +
                s.paginationItem
              }
            >
              <button
                onClick={(e) => {
                  onPageChanged(number);
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
      <ul>
        {users.map((user) => (
          <li className={s.user}>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={user.photos.small ? user.photos.small : defAvatar}
                alt={user.fullName}
                className={s.avatar}
              />
            </NavLink>
            <br />
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => {
                  follow(user.id);
                }}
              >
                Follow
              </button>
            )}
            <ul className={s.userInfo}>
              <li className={s.infoItem}>
                <h3 className={s.fullName}>{user.name}</h3>
                <span>{user.status}</span>
              </li>
              <li className={s.infoItem}>
                <span className={s.infoGeo}>{"user.location.country"}</span>
                <span className={s.infoGeo}>{"user.location.city"}</span>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
