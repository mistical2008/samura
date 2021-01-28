import React from "react";
import s from "./Userpic.module.css";
import defAvatar from "../../../../../assets/user-1.png";

const Userpic = ({ src, alt }) => {
  return (
    <div className={s.imgContainer}>
      <img src={src || defAvatar} alt={alt || ""} />
    </div>
  );
};

export default Userpic;
