import React from "react";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

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

  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.addMessage();
    newMessageElement.current.focus();
  };

  const onChangeMessage = () => {
    const text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogsPage}>
      <div className={s.dialogs}>{dialogNodes}</div>
      <div className={s.messagesContainer}>
        <div className={s.messages}>{messageNodes}</div>
        <textarea
          className={s.inputText}
          ref={newMessageElement}
          onChange={onChangeMessage}
          value={state.newMessageText}
          name="type-text"
          id="type-text"
          cols="30"
          rows="10"
          placeholder="Type your text..."
        ></textarea>
        <button type="button" onClick={addMessage} className={s.buttonMessage}>
          Post
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
