import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileBio from './ProfileBio/ProfileBio'
import s from './Profile.module.css'

const Profile = ({
    profile,
    status,
    updateUserStatus,
    savePhoto,
    saveUserProfile,
    isOwner,
}) => {
    // const state = store.getState().profilePage;
    // console.log("profile from profile", profile);
    return (
        <div className={s.content}>
            <div className={s.wrapper}>
                <ProfileBio
                    profile={profile}
                    status={status}
                    updateUserStatus={updateUserStatus}
                    saveUserProfile={saveUserProfile}
                    savePhoto={savePhoto}
                    isOwner={isOwner}
                />
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile
