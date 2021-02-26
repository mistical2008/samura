import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWH from "../../ProfileStatus/ProfileStatusWH";
import Userpic from "../MyPosts/Post/Userpic/Userpic";
import s from "./ProfileBio.module.css";

const ProfileContacts = (contacts) => {
  const isEmpty = (contacts) => {
    return Object.keys(contacts)
      .map((item) => {
        console.log(contacts[item]);
        return contacts[item];
      })
      .every((item) => item || true);
  };

  const contactNodes = Object.keys(contacts).map((key) => {
    const contactLink = contacts[key];
    const contactTitle = key[0].toUpperCase() + key.slice(1);

    return (
      contacts[key] && (
        <li>
          <a href={contactLink}>{contactTitle}</a>
        </li>
      )
    );
  });

  return (
    <>
      {!isEmpty(contacts) && (
        <li>
          <ul>
            <b>Contacts: </b>
            {contactNodes}
          </ul>
        </li>
      )}
    </>
  );
};

const ProfileBioForm = ({
  aboutMe,
  fullName,
  lookingForAJob,
  lookingForAJobDescription,
  contacts,
}) => {};

const BioDescription = ({
  profile: { aboutMe, fullName, lookingForAJob, lookingForAJobDescription },
  isOwner,
}) => {
  // console.log(profile);
  return (
    <>
      <ul>
        {aboutMe && (
          <li>
            <b>About Me: </b>
            {aboutMe}
          </li>
        )}
        <li>
          <b>Looking for a job: </b>
          {lookingForAJob ? "yes" : "no"}
        </li>
        {lookingForAJob && (
          <li>
            <ul>
              <li>{lookingForAJobDescription}</li>
            </ul>
          </li>
        )}
        <ProfileContacts />
      </ul>
    </>
  );
};

const ProfileBio = ({
  profile,
  status,
  updateUserStatus,
  savePhoto,
  isOwner,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  const isEditMode = false;

  const handleAvatarLoad = (e) => {
    const files = e.currentTarget.files;
    if (!files.length) return;
    savePhoto(files[0]);
  };

  return (
    <section className={s.bio}>
      <h2 className={s.subheading}>{profile.fullName}</h2>
      <Userpic src={profile.photos.large} />
      {isOwner && (
        <input
          name="inputChooseAvatar"
          type="file"
          onChange={handleAvatarLoad}
        ></input>
      )}
      {isEditMode ? (
        <ProfileBioForm profile={profile} />
      ) : (
        <BioDescription profile={profile} />
      )}
      <ProfileStatusWH status={status} updateUserStatus={updateUserStatus} />
    </section>
  );
};

export default ProfileBio;
