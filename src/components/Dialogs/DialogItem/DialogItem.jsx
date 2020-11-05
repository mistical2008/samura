import React from "react";
import { NavLink } from "react-router-dom";

import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.activeDialog}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
