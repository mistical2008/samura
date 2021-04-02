import {DialogShape, MessageShape} from '../types/base';

const ADD_MESSAGE = `ADD-MESSAGE`;

export type DialogActions = AddMessage;
type AddMessage = {
  type: typeof ADD_MESSAGE,
  newMessageText: string,
};
export const addMessage = (newMessageText: string): AddMessage => ({
  type: ADD_MESSAGE,
  newMessageText,
});

const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Dimych",
      avatar:
        "http://purepng.com/public/uploads/large/purepng.com-man-face-herofaceshumansfrontalhuman-identityman-1421526885661w7dlt.png",
    },
    {
      id: 2,
      name: "Sveta",
      avatar: "http://pngimg.com/uploads/face/face_PNG5667.png",
    },
    {
      id: 3,
      name: "Sasha",
      avatar:
        "http://www.freepngimg.com/download/drake/20552-2-drake-face-transparent.png",
    },
    {
      id: 4,
      name: "Valera",
      avatar: "http://pluspng.com/img-png/face-hd-png-kanye-450.png",
    },
    {
      id: 5,
      name: "Anya",
      avatar:
        "https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Animals-PNG/Cat_Face_PNG_Clip_Art_Image.png?m=1537487302",
    },
    {
      id: 6,
      name: "Zhenya",
      avatar: "https://www.freeiconspng.com/uploads/obama-face-png-3.png",
    },
  ] as DialogShape[],
  messages: [
    {id: 1, my: false, text: "Hi there!"},
    {id: 2, my: true, text: "Hello"},
    {id: 1, my: false, text: "How are you?"},
  ] as MessageShape[],
};
export type InitialState = typeof initialState;

const dialogsReducer = (state = initialState, action: DialogActions): InitialState => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: 1,
        my: true,
        text: action.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export default dialogsReducer;
