import React from "react";

import s from "./ProfileCover.module.css";
import defCover from "../../../assets/profile-cover-def.jpg";

const ProfileHeader = () => {
  return (
    <div className={s.pageCover}>
      <img src={defCover} alt="Profile Cover" />
    </div>
  );
};

export default ProfileHeader;
