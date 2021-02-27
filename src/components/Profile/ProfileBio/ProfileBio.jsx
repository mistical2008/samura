import React, { useState } from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWH from "../../ProfileStatus/ProfileStatusWH";
import Userpic from "../MyPosts/Post/Userpic/Userpic";
import BioForm from "./BioForm";
import s from "./ProfileBio.module.css";

const ProfileContacts = (contacts) => {
  const isEmpty = (contacts) => {
    return Object.keys(contacts)
      .map((item) => {
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

const BioDescription = ({
  profile: { aboutMe, lookingForAJob, lookingForAJobDescription },
  isOwner,
  setEditMode,
}) => {
  // console.log(profile);
  return (
    <>
      <ul>
        {isOwner && <button onClick={setEditMode}>Edit profile</button>}
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
  saveUserProfile,
  savePhoto,
  isOwner,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onFormSubmit = (formData) => {
    console.log("Submited formData!");
    console.log(formData);
    saveUserProfile(formData).then((res) => {
      console.log(res);
      setIsEditMode(false);
    });
  };

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
        <BioForm
          initialValues={profile}
          profile={profile}
          onSubmit={onFormSubmit}
        />
      ) : (
        <BioDescription
          profile={profile}
          isOwner={isOwner}
          setEditMode={() => setIsEditMode(true)}
        />
      )}
      <ProfileStatusWH status={status} updateUserStatus={updateUserStatus} />
    </section>
  );
};

export default ProfileBio;
