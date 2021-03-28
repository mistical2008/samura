import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import Login from "../Login/Login";
import MessageForm from "../MessageForm/MessageForm";
// import {TInitialState} from "../../redux/dialogs-reducer";

// type TDialogsProps = {
// addMessage: (newMessageText: string) => void,
// isAuth: boolean,
// dialogsPage: TInitialState,
// }

// export type TNewMessageValues = {
// "new-message-text": string
// }

const Dialogs = ({addMessage, isAuth, dialogsPage}) => {
  const state = dialogsPage;

  const dialogNodes = state.dialogs.map((dialog) => {
    return (
      <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
    );
  });

  const messageNodes = state.messages.map((message) => {
    return <Message my={message.my} id={message.id} text={message.text} />;
  });

  const addMessageHandler = (values) => {
    addMessage(values["new-message-text"]);
  };

  if (!isAuth) return <Login />;

  return (
    <div className={s.dialogsPage}>
      <div className={s.dialogs}>{dialogNodes}</div>
      <div className={s.messagesContainer}>
        <div className={s.messages}>{messageNodes}</div>
        <MessageForm onSubmit={addMessageHandler} />
      </div>
    </div>
  );
};

export default Dialogs;
