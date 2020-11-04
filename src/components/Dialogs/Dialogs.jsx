import React from "react";
import { NavLink } from "react-router-dom";

import "../../App.css";
import s from "./Dialogs.module.css";

const dialogData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Sveta" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Valera" },
  { id: 5, name: "Anya" },
  { id: 6, name: "Zhenya" },
];

const messages = [
  { id: 1, text: "Hi there!" },
  { id: 1, text: "Hello" },
  { id: 1, text: "How are you?" },
];

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.activeDialog}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  const className = props.my ? `${s.my} ${s.message}` : `${s.message}`;
  return <div className={className}>{props.text}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogsPage}>
      <div className={s.dialogs}>
        <DialogItem name="Dimych" id="1" active />
        <DialogItem name="Sveta" id="2" />
        <DialogItem name="Sasha" id="3" />
        <DialogItem name="Valera" id="4" />
        <DialogItem name="Anya" id="5" />
        <DialogItem name="Zhenya" id="6" />
      </div>
      <div className={s.messages}>
        <Message text="Hi there!" />
        <Message my text="Hello!" />
        <Message text="How are you?" />
      </div>
    </div>
  );
};

export default Dialogs;
