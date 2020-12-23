import "../../../App.css";

import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  const posts = props.posts;

  const postsNodes = posts.map((post) => {
    return <Post message={post.text} avatar={post.avatar} likes={post.likes} />;
  });

  const addPost = (values) => {
    props.addPost(values.text);
  };

  return (
    <div className={s.myPosts}>
      <section className={s.postFormSection}>
        <h2 className={s.subheading}>My posts</h2>
        <AddPostFormRedux onSubmit={addPost} />
      </section>
      <section className={s.posts}>{postsNodes}</section>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form action="echo.htmlacademy.com" onSubmit={props.handleSubmit} className={s.postForm}>
      <Field
        name="text"
        id="post-text"
        className="input-text"
        placeholder="Type your text..."
        component="textarea"
      ></Field>
      <div className="u-block">
        <button type="submit">
          Post
        </button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: "profile-add-post"})(AddPostForm);


export default MyPosts;