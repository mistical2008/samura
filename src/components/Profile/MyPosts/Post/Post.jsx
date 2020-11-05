import React from "react";
import s from "./Post.module.css";
import Userpic from "./Userpic/Userpic";

const Post = (props) => {
  return (
    <div id="post-1" className={s.post}>
      <Userpic src={props.avatar} />
      <span className={s.postBody}>
        <p className={s.message}>{props.message}</p>
        <p className={s.likes}>{props.likes || 0} likes</p>
      </span>
    </div>
  );
};

export default Post;
