const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: 5,
        avatar:
          "http://static1.wikia.nocookie.net/__cb20131010204622/theamazingworldofgumball/images/3/35/Face_will_smith.png",
        text: state.newPostText,
        likes: 0,
      });
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export default profileReducer;
