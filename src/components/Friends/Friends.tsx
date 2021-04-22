import React from "react";
import {NavLink} from "react-router-dom";

import s from "./Friends.module.css";

import Userpic from "../Profile/MyPosts/Post/Userpic/Userpic";

type TFriend = {
  id: number,
  name: string,
  avatar: string,
}

type TFriendsProps = {
  state: Array<TFriend>
  // TODO: remove className hack
  className?: string
}

const Friends = ({state}: TFriendsProps) => {
  const friendsItems = state.map((item: TFriend) => {
    return (
      <li className={s.friend}>
        <NavLink to={`/dialogs/${item.id}`}>
          <Userpic src={item.avatar} />
          <span>{item.name}</span>
        </NavLink>
      </li>
    );
  });
  return (
    <div>
      <h3>My friends</h3>
      <ul className={s.friendsList}>{friendsItems}</ul>
    </div>
  );
};

export default Friends;