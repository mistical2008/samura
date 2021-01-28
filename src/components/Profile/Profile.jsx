import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileHeader from "./ProfileCover/ProfileCover";
import s from "./Profile.module.css";

const Profile = ({ profile, status, updateUserStatus, store }) => {
  // const state = store.getState().profilePage;
  return (
    <div className={s.content}>
      <ProfileHeader />
      <div className={s.wrapper}>
        <ProfileBio
          profile={profile}
          status={status}
          updateUserStatus={updateUserStatus}
        />
        <MyPostsContainer store={store} />
      </div>
    </div>
  );
};

export default Profile;
