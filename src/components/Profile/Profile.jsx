import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileHeader from "./ProfileCover/ProfileCover";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileHeader />
      <div className={s.wrapper}>
        <ProfileBio />
        <MyPosts
          state={props.state}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Profile;
