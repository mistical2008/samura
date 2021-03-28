import React from "react";
import s from "./Userpic.module.css";
import defAvatar from "../../../../../assets/user-1.png";

type TUserpicProps = {
  src: string,
  alt?: string,
}
const Userpic = ({src, alt}: TUserpicProps) => {
  return (
    <div className={s.imgContainer}>
      <img src={src || defAvatar} alt={alt || ""} />
    </div>
  );
};

export default Userpic;
