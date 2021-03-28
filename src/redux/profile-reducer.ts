import {AnyAction} from 'redux';
import {stopSubmit} from "redux-form";

import {
  TPostArray,
  TProfilePhotos,
  TUserId,
  TUserProfile
} from '../types/base';
import {profileAPI} from "../api/api";

const app = "samuraijs";
const reducer = "profile";

const ADD_POST = `${app}/${reducer}/ADD-POST`;
const SET_USER_PROFILE = `${app}/${reducer}/SET_USER_PROFILE`;
const SET_STATUS = `${app}/${reducer}/SET_STATUS`;
const SET_USER_PHOTO = `${app}/${reducer}/SET_USER_PHOTO`;

type TAddPost = {type: typeof ADD_POST, newPostText: string};
export const addPost = (newPostText: string): TAddPost => ({type: ADD_POST, newPostText});

type TSetUserProfile = {
  type: typeof SET_USER_PROFILE,
  profile: TUserProfile,
};
const setUserProfileAction = (profile: TUserProfile): TSetUserProfile => ({
  type: SET_USER_PROFILE,
  profile,
});

type TSetUserPhoto = {
  type: typeof SET_USER_PHOTO,
  photos: TProfilePhotos,
};
export const setUserPhoto = (photos: TProfilePhotos): TSetUserPhoto => ({
  type: SET_USER_PHOTO,
  photos,
});

export const getUserProfile = (userId: TUserId) => {
  return async (dispatch: any) => {
    const response = await profileAPI
      .getUserProfile(userId)
      .catch((err) => console.log(err));

    dispatch(setUserProfileAction(response));
  };
};

export const saveUserProfile = (profile: TUserProfile) => {
  return async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;

    const response = await profileAPI
      .updateUserProfile(profile)
      .catch((err) => console.error(err));

    console.log(response);

    if (response.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      const message = response.messages[0];
      dispatch(stopSubmit("editProfile", {_error: message}));
      return Promise.reject(message);
    }
  };
};

type TSetUserStatus = {
  type: typeof SET_STATUS,
  status: string,
};
const setUserStatus = (status: string): TSetUserStatus => ({
  type: SET_STATUS,
  status,
});

export const getUserStatus = (userId: TUserId) => {
  return async (dispatch: any) => {
    const response = await profileAPI
      .getUserStatus(userId)
      .catch((err) => console.error(err));

    dispatch(setUserStatus(response));
  };
};

export const updateUserStatus = (status: string) => {
  return async (dispatch: any) => {
    const response = await profileAPI
      .updateUserStatus(status)
      .catch((err) => console.error(err));

    if (response.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };
};

export const savePhoto = (photo: any) => {
  return async (dispatch: any) => {
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
  ] as TPostArray,
  profile: null as TUserProfile | null,
  status: "",
  newPostText: "",
};
type TInitialState = typeof initialState;

const profileReducer = (state = initialState, action: AnyAction): TInitialState => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        avatar:
          "http://static1.wikia.nocookie.net/__cb20131010204622/theamazingworldofgumball/images/3/35/Face_will_smith.png",
        text: action.newPostText,
        likes: 0,
      };
      return {...state, posts: [...state.posts, newPost]};
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
        profile: {...state.profile, photos: {...action.photos}} as TUserProfile,
      };
    default:
      return state;
  }
};

export default profileReducer;
