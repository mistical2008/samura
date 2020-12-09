import "../../../App.css";

import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const posts = props.posts;
  const newPostText = props.newPostText;

  const postsNodes = posts.map((post) => {
    return <Post message={post.text} avatar={post.avatar} likes={post.likes} />;
  });

  const newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
    newPostElement.current.focus();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.myPosts}>
      <section className={s.postFormSection}>
        <h2 className={s.subheading}>My posts</h2>
        <form action="echo.htmlacademy.com" className={s.postForm}>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={newPostText}
            name="text"
            id="post-text"
            className="input-text"
            placeholder="Type your text..."
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
