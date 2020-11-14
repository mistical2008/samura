import React from "react";

import "../../App.css";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogNodes = props.state.dialogs.map((dialog) => {
    return (
      <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
    );
  });

  const messageNodes = props.state.messages.map((message) => {
    return <Message my={message.my} id={message.id} text={message.text} />;
  });

  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.dispatch({type: "ADD-MESSAGE"});
    newMessageElement.current.focus();
  };

  const onChangeMessage = () => {
    const text = newMessageElement.current.value;
    props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXt", text: text});
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
          value={props.state.newMessageText}
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
