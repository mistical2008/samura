import React from "react";
import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import defAvatar from "../../assets/user-1.png";

const User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
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
  );
};

export default User;
