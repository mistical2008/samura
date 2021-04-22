import {AnyAction} from 'redux';
import {FormAction, stopSubmit} from "redux-form";
import {
  PhotosShape,
  ProfileShape,
  PostShape
} from '../types/base';
import {profileAPI} from "../api/api";
import {Dispatch} from 'react';
import {AppAsyncThunk} from './redux-store';

const ADD_POST = `ADD-POST`;
const SET_USER_PROFILE = `SET_USER_PROFILE`;
const SET_STATUS = `SET_STATUS`;
const SET_USER_PHOTO = `SET_USER_PHOTO`;

export type ProfileActions =
  | AddPost
  | SetUserProfile
  | SetUserPhoto
  | SetUserStatus
export type ProfileDispatch = Dispatch<ProfileActions>;
export type ProfileAsyncThunk = AppAsyncThunk<ProfileActions>

type AddPost = {type: typeof ADD_POST, newPostText: string};
export const addPost = (newPostText: string): AddPost => ({type: ADD_POST, newPostText});

type SetUserProfile = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileShape,
};
const setUserProfileAction = (profile: ProfileShape): SetUserProfile => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetUserPhoto = {
  type: typeof SET_USER_PHOTO,
  photos: PhotosShape,
};
export const setUserPhoto = (photos: PhotosShape): SetUserPhoto => ({
  type: SET_USER_PHOTO,
  photos,
});

type SetUserStatus = {
  type: typeof SET_STATUS,
  status: string,
};
const setUserStatus = (status: string): SetUserStatus => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId: number): ProfileAsyncThunk => {
  return async (dispatch: ProfileDispatch) => {
    try { const response = await profileAPI
        .getUserProfile(userId)
        .catch((err) => console.log(err));

      dispatch(setUserProfileAction(response)); 
    } catch (err) {
      console.error(err);
    }
  };
};

export const saveUserProfile = (profile: ProfileShape): ProfileAsyncThunk => {
  return async (dispatch: Dispatch<ProfileActions | AppAsyncThunk<ProfileActions> | FormAction>, getState: any) => {
    try { const userId = getState().auth.userId;

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
    } catch (err) {
      console.error(err);
    }
  };
};


export const getUserStatus = (userId: number): ProfileAsyncThunk => {
  return async (dispatch: ProfileDispatch) => {
    const response = await profileAPI
      .getUserStatus(userId)
      .catch((err) => console.error(err));

    dispatch(setUserStatus(response));
  };
};

export const updateUserStatus = (status: string): ProfileAsyncThunk => {
  return async (dispatch: ProfileDispatch) => {
    try { const response = await profileAPI
        .updateUserStatus(status)
        .catch((err) => console.error(err));

      if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
      } 
    } catch (err) {
      console.error(err);
    }
  };
};

export const savePhoto = (photo: any): ProfileAsyncThunk => {
  return async (dispatch: ProfileDispatch) => {
    try { const response = await profileAPI
        .updateUserPhoto(photo)
        .catch((err) => console.error(err));

      if (response && response.resultCode === 0) {
        dispatch(setUserPhoto(response.data));
      } 
    } catch (err) {
      console.error(err);
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
  ] as PostShape[],
  profile: null as ProfileShape | null,
  status: "",
  newPostText: "",
};
type InitialState = typeof initialState;

const profileReducer = (state = initialState, action: ProfileActions): InitialState => {
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
        profile: {...state.profile, photos: {...action.photos}} as ProfileShape,
      };
    default:
      return state;
  }
};

export default profileReducer;
