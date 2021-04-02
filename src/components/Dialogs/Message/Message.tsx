import React from "react";
import {MessageShape} from "../../../types/base";

import s from "./Message.module.css";


const Message = ({my, text, id}: MessageShape) => {
  const className = my ? `${s.my} ${s.message}` : `${s.message}`;
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
};

export default Message;
