import {FormAction, stopSubmit} from "redux-form";
import {
  PhotosShape,
  ProfileShape,
  PostShape
} from '../types/base';
import {profileAPI} from "../api/api";
import {Dispatch} from 'react';
import {AppAsyncThunk, InferValuesTypes} from './redux-store';

export type ActionTypes = ReturnType<InferValuesTypes<typeof actions>>;
export type ProfileDispatch = Dispatch<ActionTypes>;
export type ProfileAsyncThunk = AppAsyncThunk<ActionTypes>

export const actions = {
    addPost: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),

    setUserProfileAction: (profile: ProfileShape) => ({
      type: 'SET_USER_PROFILE',
      profile,
    } as const),

    setUserPhoto: (photos: PhotosShape) => ({
      type: 'SET_USER_PHOTO',
      photos,
    } as const),

    setUserStatus: (status: string) => ({
      type: 'SET_STATUS',
      status,
    }as const),
  }

export const getUserProfile = (userId: number): ProfileAsyncThunk => {
  return async (dispatch: ProfileDispatch) => {
    try { const response = await profileAPI
        .getUserProfile(userId)

      dispatch(actions.setUserProfileAction(response)); 
    } catch (err) {
      console.error(err);
    }
  };
};

export const saveUserProfile = (profile: ProfileShape): ProfileAsyncThunk => {
  return async (dispatch: Dispatch<ActionTypes | AppAsyncThunk<ActionTypes> | FormAction>, getState: any) => {
    try { const userId = getState().auth.userId;

      const response = await profileAPI
        .updateUserProfile(profile)

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

    dispatch(actions.setUserStatus(response));
  };
};

export const updateUserStatus = (status: string): ProfileAsyncThunk => {
  return async (dispatch: ProfileDispatch) => {
    try { const response = await profileAPI
        .updateUserStatus(status)

      if (response.resultCode === 0) {
        dispatch(actions.setUserStatus(status));
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

      if (response && response.resultCode === 0) {
        dispatch(actions.setUserPhoto(response.data));
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

const profileReducer = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case 'ADD_POST': {
      const newPost = {
        id: 5,
        avatar:
          "http://static1.wikia.nocookie.net/__cb20131010204622/theamazingworldofgumball/images/3/35/Face_will_smith.png",
        text: action.newPostText,
        likes: 0,
      };
      return {...state, posts: [...state.posts, newPost]};
    }
    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };
    case 'SET_STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'SET_USER_PHOTO':
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
