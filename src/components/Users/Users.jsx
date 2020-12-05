import React, { Component } from "react";

import s from "./Users.module.css";
import defAvatar from "./user.png";

import axios from "axios";

export default class User extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
      .catch((err) => console.log(err));
  }

  setCurrentPage() {}

  render() {
    return (
      <ul>
        <div>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
        </div>
        {this.props.users.map((user) => (
          <li className={s.user}>
            <img
              src={user.photos.small ? user.photos.small : defAvatar}
              alt={user.fullName}
              className={s.avatar}
            />
            <br />
            {user.followed ? (
              <button onClick={() => this.props.unfollow(user.id)}>
                Unfollow
              </button>
            ) : (
              <button onClick={() => this.props.follow(user.id)}>Follow</button>
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
    );
  }
}
