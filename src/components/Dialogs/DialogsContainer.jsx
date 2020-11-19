import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


// const DialogsContainer = () => {
// return (
// <StoreContext.Consumer>
// {(store) => {
// const state = store.getState().dialogsPage;
//
// const addMessage = () => {
// store.dispatch(addMessageActionCreator());
// };
//
// const updateNewMessageText = (text) => {
// store.dispatch(updateNewMessageTextActionCreator(text));
// };
//
// return (
// <Dialogs
// updateNewMessageText={updateNewMessageText}
// addMessage={addMessage}
// dialogsPage={state}
// />
// );
// }}
// </StoreContext.Consumer>
// );
// };

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => { dispatch(addMessageActionCreator()) },
    updateNewMessageText: (text) => { dispatch(updateNewMessageTextActionCreator(text)) },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
