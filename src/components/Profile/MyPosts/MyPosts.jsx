import React from "react";

import Post from './Post/Post';
import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <section className={s.postFormSection}>
        <h2 className={s.subheading}>My posts</h2>
        <form action="echo.htmlacademy.com" className={s.postForm}>
          <textarea name="text" id="post-text" cols="100" rows="5">
            ...Type your text
          </textarea>
          <br></br>
          <button type="submit">Post</button>
        </form>
      </section>
      <section className={s.posts}>
        <Post />
        <Post />
      </section>
    </div>
  );
};

export default MyPosts;
