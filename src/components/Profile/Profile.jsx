import React from "react";

import MyPosts from "./MyPosts/MyPosts";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileHeader />
      <ProfileBio />
      <MyPosts />
    </div>
  );
};

export default Profile;
