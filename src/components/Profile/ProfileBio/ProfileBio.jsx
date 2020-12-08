import React from "react";
import Preloader from "../../Preloader/Preloader";
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
      <p className={s.profileAbout}>{props.profile.aboutMe}</p>
    </section>
  );
};

export default ProfileBio;
