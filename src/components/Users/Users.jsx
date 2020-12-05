import React, { Component } from "react";

import s from "./Users.module.css";
import defAvatar from "./user.png";

import * as axios from "axios";

export default class User extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersCount}&page=${this.props.currentPage}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      })
      .catch((err) => console.log(err));
  }

  setCurrentPage() {}

  render() {
    let pagesCount = Math.ceil(this.props.usersCount / this.props.usersPerPage);
    console.log(pagesCount);
    return (
        <div>
            <ul className={s.pagination}>
                { [...Array(pagesCount)].map( (_,index) => {
                    let number = index + 1;
                    return  (
                        <li className={ (number === this.props.currentPage && s.paginationActiveItem) + " " + s.paginationItem}>
                            <button>{ number }</button>
                        </li>  
                    )
                } ) }
            </ul>
            <ul>
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
        </div>
    );
  }
}
