import React from "react";

import Post from "./Post/Post";
import "../../../App.css";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const posts = props.state.posts;
  const postsNodes = posts.map((post) => {
    return <Post message={post.text} avatar={post.avatar} likes={post.likes} />;
  });

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({type: "ADD-POST"});
    newPostElement.current.focus();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch({type: "UPDATE-NEW-POST-TEXT", text: text});
  };

  return (
    <div className={s.myPosts}>
      <section className={s.postFormSection}>
        <h2 className={s.subheading}>My posts</h2>
        <form action="echo.htmlacademy.com" className={s.postForm}>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.state.newPostText}
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
