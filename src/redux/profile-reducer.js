import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const app = "samuraijs";
const reducer = "profile";

const ADD_POST = `${app}/${reducer}/ADD-POST`;
const SET_USER_PROFILE = `${app}/${reducer}/SET_USER_PROFILE`;
const SET_STATUS = `${app}/${reducer}/SET_STATUS`;
const SET_USER_PHOTO = `${app}/${reducer}/SET_USER_PHOTO`;

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
const setUserProfileAction = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserPhoto = (photos) => ({
  type: SET_USER_PHOTO,
  photos,
});

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI
      .getUserProfile(userId)
      .catch((err) => console.log(err));

    dispatch(setUserProfileAction(response));
  };
};

export const saveUserProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;

    const response = await profileAPI
      .updateUserProfile(profile)
      .catch((err) => console.error(err));
    console.log(response);

    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      const message = response.data.messages[0];
      dispatch(stopSubmit("editProfile", { _error: message }));
      return Promise.reject(message);
    }
  };
};

const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI
      .getUserStatus(userId)
      .catch((err) => console.error(err));

    dispatch(setUserStatus(response));
  };
};

export const updateUserStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI
      .updateUserStatus(status)
      .catch((err) => console.error(err));

    if (response.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };
};

export const savePhoto = (photo) => {
  return async (dispatch) => {
    const response = await profileAPI
      .updateUserPhoto(photo)
      .catch((err) => console.error(err));

    if (response.resultCode === 0) {
      dispatch(setUserPhoto(response.data.photos));
    }
  };
};

const initialState = {
  posts: [
    {
      id: 1,
      avatar:
        "http://static1.wikia.nocookie.net/__cb20131010204622/theamazingworldofgumball/images/3/35/Face_will_smith.png",
      text: "Hello! How are you?",
      likes: 110,
    },
    {
      id: 2,
      avatar:
        "https://www.photocase.com/photos/104760-child-joy-face-eyes-boy-child-happy-laughter-masculine-photocase-stock-photo-large.jpeg",
      text: "Hi there!!!!!",
      likes: 112,
    },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        avatar:
          "http://static1.wikia.nocookie.net/__cb20131010204622/theamazingworldofgumball/images/3/35/Face_will_smith.png",
        text: action.newPostText,
        likes: 0,
      };
      return { ...state, posts: [...state.posts, newPost] };
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_USER_PHOTO:
      console.log("Photos have been setted");
      return {
        ...state,
        profile: { ...state.profile, photos: { ...action.photos } },
      };
    default:
      return state;
  }
};

export default profileReducer;
