import React from "react";

import Post from "./Post/Post";
import "../../../App.css";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const posts = props.posts;
  const postsNodes = posts.map((post) => {
    return <Post message={post.text} avatar={post.avatar} likes={post.likes} />;
  });

  return (
    <div className={s.myPosts}>
      <section className={s.postFormSection}>
        <h2 className={s.subheading}>My posts</h2>
        <form action="echo.htmlacademy.com" className={s.postForm}>
          <textarea
            name="text"
            id="post-text"
            className="input-text"
            placeholder="...Type your text"
            cols="100"
            rows="5"
          ></textarea>
          <div className="u-block">
            <button type="submit">Post</button>
          </div>
        </form>
      </section>
      <section className={s.posts}>{postsNodes}</section>
    </div>
  );
};

export default MyPosts;
