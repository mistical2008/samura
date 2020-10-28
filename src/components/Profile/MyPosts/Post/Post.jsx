import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div id="post-1" className={s.post}>
      <img
        src="https://vignette.wikia.nocookie.net/theamazingworldofgumball/images/3/35/Face_will_smith.png"
        alt=""
      />
      Post 1<div className={s.likes}>1like</div>
    </div>
  );
};

export default Post;
