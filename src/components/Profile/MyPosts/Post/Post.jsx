import React from "react";
import s from "./Post.module.css";
import Userpic from "./Userpic/Userpic";

const Post = ({ avatar, message, likes }) => {
  return (
    <div id="post-1" className={s.post}>
      <Userpic src={avatar} />
      <span className={s.postBody}>
        <p className={s.message}>{message}</p>
        <p className={s.likes}>{likes || 0} likes</p>
      </span>
    </div>
  );
};

export default Post;
