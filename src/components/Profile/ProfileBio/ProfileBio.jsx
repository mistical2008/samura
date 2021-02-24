import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWH from "../../ProfileStatus/ProfileStatusWH";
import Userpic from "../MyPosts/Post/Userpic/Userpic";
import s from "./ProfileBio.module.css";

const BioDescription = ({profile, isOwner}) => {
  console.log(profile);
  
  
  return (
    <>
    { Object.keys(profile).map((key) => {
        return <div>{`${key}: ${profile[key]}`}</div>
    })
    }
    </>
    //     {
    //   "aboutMe": null,
    //   "contacts": {
    //     "facebook": null,
    //     "website": null,
    //     "vk": null,
    //     "twitter": null,
    //     "instagram": null,
    //     "youtube": null,
    //     "github": null,
    //     "mainLink": null
    //   },
    //   "lookingForAJob": false,
    //   "lookingForAJobDescription": null,
    //   "fullName": "Spartasapp",
    //   "userId": 1342,
    //   "photos": {
    //     "small": null,
    //     "large": null
    //   }
    // }
  )
}

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
      <BioDescription profile={profile} />
      <ProfileStatusWH status={status} updateUserStatus={updateUserStatus} />
    </section>
  );
};

export default ProfileBio;
