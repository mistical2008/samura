import React from "react";
import * as axios from "axios";
import s from "./Users.module.css";
import defAvatar from "../../assets/user-1.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.usersCount / props.usersPerPage);

  return (
    <div>
      <ul className={s.pagination}>
        {[...Array(pagesCount)].map((_, index) => {
          let number = index + 1;
          return (
            <li
              className={
                (number === props.currentPage && s.paginationActiveItem) +
                " " +
                s.paginationItem
              }
            >
              <button
                onClick={(e) => {
                  props.onPageChanged(number);
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
      <ul>
        {props.users.map((user) => (
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
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "285a2ecc-40bb-4abe-bf10-4dd0e2c34c42",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                    })
                    .catch((err) => console.log(err));
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "285a2ecc-40bb-4abe-bf10-4dd0e2c34c42",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(user.id);
                      }
                    })
                    .catch((err) => console.log(err));
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
