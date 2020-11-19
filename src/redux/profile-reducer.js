const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

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
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push({
        id: 5,
        avatar:
          "http://static1.wikia.nocookie.net/__cb20131010204622/theamazingworldofgumball/images/3/35/Face_will_smith.png",
        text: state.newPostText,
        likes: 0,
      });
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newPostText = action.text;
      return stateCopy;
    }
    default:
      return state;
  }
};

export default profileReducer;
