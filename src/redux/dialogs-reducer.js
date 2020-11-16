const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessageText = state.newMessageText;
      state.messages.push({
        id: 1,
        my: true,
        text: newMessageText,
      });
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
