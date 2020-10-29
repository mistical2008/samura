import React from "react";

import s from "./ProfileCover.module.css";

const ProfileHeader = () => {
  return (
    <div className={s.pageCover}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Germany-Farchant-Landscape.JPG/800px-Germany-Farchant-Landscape.JPG"
        alt="Germany Farchant Landscape"
      />
    </div>
  );
};

export default ProfileHeader;
