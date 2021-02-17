import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWH from "../../ProfileStatus/ProfileStatusWH";
import Userpic from "../MyPosts/Post/Userpic/Userpic";
import s from "./ProfileBio.module.css";

const ProfileBio = ({ profile, status, updateUserStatus, savePhoto, isOwner }) => {
  if (!profile) {
    return <Preloader />;
  }

  const handleAvatarLoad = (e) => {
    // console.log(e.currentTarget.files)
    const files = e.currentTarget.files;
    if (!files.length) return;
    savePhoto(files[0])
  }
  // const isOwner = true;
  return (
    <section className={s.bio}>
      <h2 className={s.subheading}>{profile.fullName}</h2>
      <Userpic src={profile.photos.large} />
      {isOwner && <input name="inputChooseAvatar" type="file" onChange={handleAvatarLoad}></input>}
      <ProfileStatusWH status={status} updateUserStatus={updateUserStatus} />
    </section>
  );
};

export default ProfileBio;
