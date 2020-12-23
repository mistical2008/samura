import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import Login from "../Login/Login";
import { Field, reduxForm } from 'react-form'

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
          <AddMessageFormRedux onSumbit={addMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSumbit={props.handleSubmit}>
      <Field
        className={s.inputText}
        name="new-message-text"
        id="type-text"
        cols="30"
        rows="10"
        placeholder="Type your text..."
        component="textarea"
      ></Field>
      <button className={s.buttonMessage}>
        Post
      </button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogsAddMessage"})(AddMessageForm)

export default Dialogs;
