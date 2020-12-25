import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import Login from "../Login/Login";
import MessageForm from "../MessageForm/MessageForm";

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogNodes = state.dialogs.map((dialog) => {
    return (
      <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
    );
  });

  const messageNodes = state.messages.map((message) => {
    return <Message my={message.my} id={message.id} text={message.text} />;
  });

  const addMessage = (values) => {
    props.addMessage(values["new-message-text"]);
  };

  if (!props.isAuth) return <Login />;

  return (
    <div className={s.dialogsPage}>
      <div className={s.dialogs}>{dialogNodes}</div>
      <div className={s.messagesContainer}>
        <div className={s.messages}>{messageNodes}</div>
        <MessageForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
