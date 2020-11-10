import React from "react";

import Post from "./Post/Post";
import "../../../App.css";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const posts = props.posts;
  const postsNodes = posts.map((post) => {
    return <Post message={post.text} avatar={post.avatar} likes={post.likes} />;
  });
  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.myPosts}>
      <section className={s.postFormSection}>
        <h2 className={s.subheading}>My posts</h2>
        <form action="echo.htmlacademy.com" className={s.postForm}>
          <textarea
            ref={newPostElement}
            name="text"
            id="post-text"
            className="input-text"
            placeholder="...Type your text"
            cols="100"
            rows="5"
          ></textarea>
          <div className="u-block">
            <button onClick={addPost} type="button">
              Post
            </button>
          </div>
        </form>
      </section>
      <section className={s.posts}>{postsNodes}</section>
    </div>
  );
};

export default MyPosts;
