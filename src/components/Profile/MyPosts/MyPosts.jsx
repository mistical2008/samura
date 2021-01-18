import React from "react";
import Post from "./Post/Post";
import PostForm from "../../PostForm/PostForm";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const posts = props.posts;
  console.count("MyPosts renders:");

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
        <PostForm onSubmit={addPost} />
      </section>
      <section className={s.posts}>{postsNodes}</section>
    </div>
  );
};

export default React.memo(MyPosts);
