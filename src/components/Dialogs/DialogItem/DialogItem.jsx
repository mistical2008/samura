import React from "react";
import { NavLink } from "react-router-dom";

import s from "./DialogItem.module.css";
import Userpic from "../../Profile/MyPosts/Post/Userpic/Userpic";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialog} activeClassName={s.activeDialog}>
      <NavLink to={path}>
        <Userpic src={props.avatar} />
        <span>{props.name}</span>
      </NavLink>
    </div>
  );
};

export default DialogItem;
