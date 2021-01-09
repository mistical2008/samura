import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
const setUserProfileAction = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    return profileAPI
      .getUserProfile(userId)
      .then((data) => {
        dispatch(setUserProfileAction(data));
      })
      .catch((err) => console.log(err));
  };
};

const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserStatus = (userId) => {
  return (dispatch) => {
    return profileAPI
      .getUserStatus(userId)
      .then((data) => {
        dispatch(setUserStatus(data));
      })
      .catch((err) => console.log(err));
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    return profileAPI
      .updateUserStatus(status)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setUserStatus(status));
        }
      })
      .catch((err) => console.log(err));
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
    default:
      return state;
  }
};

export default profileReducer;
