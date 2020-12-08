import React from "react";
import s from "./Userpic.module.css";
import defAvatar from "../../../../../assets/user-1.png";

const Userpic = (props) => {
  return (
    <div className={s.imgContainer}>
      <img src={props.src || defAvatar} alt={props.alt || ""} />
    </div>
  );
};

export default Userpic;
