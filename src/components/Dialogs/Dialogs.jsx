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

  return (
    <div className={s.dialogsPage}>
      <div className={s.dialogs}>{dialogNodes}</div>
      <div className={s.messages}>{messageNodes}</div>
    </div>
  );
};

export default Dialogs;
