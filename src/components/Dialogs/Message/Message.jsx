import React from "react";

import s from "./Message.module.css";

const Message = (props) => {
  const className = props.my ? `${s.my} ${s.message}` : `${s.message}`;
  return <div className={className}>{props.text}</div>;
};

export default Message;
