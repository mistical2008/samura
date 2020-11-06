import React from "react";

import s from "./Message.module.css";

const Message = (props) => {
  const className = props.my ? `${s.my} ${s.message}` : `${s.message}`;
  return (
    <div className={className}>
      <span>{props.text}</span>
    </div>
  );
};

export default Message;
