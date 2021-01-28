import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWH from "../../ProfileStatus/ProfileStatusWH";
import Userpic from "../MyPosts/Post/Userpic/Userpic";
import s from "./ProfileBio.module.css";

const ProfileBio = ({ profile, status, updateUserStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <section className={s.bio}>
      <h2 className={s.subheading}>{profile.fullName}</h2>
      <Userpic src={profile.photos.large} />
      <ProfileStatusWH status={status} updateUserStatus={updateUserStatus} />
    </section>
  );
};

export default ProfileBio;
