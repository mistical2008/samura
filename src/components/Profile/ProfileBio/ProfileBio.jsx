import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWH from "../../ProfileStatus/ProfileStatusWH";
import Userpic from "../MyPosts/Post/Userpic/Userpic";
import s from "./ProfileBio.module.css";

const ProfileBio = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <section className={s.bio}>
      <h2 className={s.subheading}>{props.profile.fullName}</h2>
      <Userpic src={props.profile.photos.large} />
      <ProfileStatusWH
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />
    </section>
  );
};

export default ProfileBio;
