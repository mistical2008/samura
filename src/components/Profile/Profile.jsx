import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileBio from "./ProfileBio/ProfileBio";
import ProfileHeader from "./ProfileCover/ProfileCover";
import s from "./Profile.module.css";

const Profile = (props) => {
  // const state = props.store.getState().profilePage;
  return (
    <div className={s.content}>
      <ProfileHeader />
      <div className={s.wrapper}>
        <ProfileBio profile={props.profile} />
        <MyPostsContainer store={props.store} />
      </div>
    </div>
  );
};

export default Profile;
