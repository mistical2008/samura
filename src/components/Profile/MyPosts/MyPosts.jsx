import React from "react";

import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const users = [
  {
    firstname: "Will",
    lastname: "Smith",
    avatar:
      "http://static1.wikia.nocookie.net/__cb20131010204622/theamazingworldofgumball/images/3/35/Face_will_smith.png",
  },
  {
    firstname: "Emma",
    lastname: "Watson",
    avatar:
      "https://www.photocase.com/photos/104760-child-joy-face-eyes-boy-child-happy-laughter-masculine-photocase-stock-photo-large.jpeg",
  },
];

const messages = [
  { id: 1, user: users[0], text: "Hello! How are you?" },
  { id: 2, user: users[1], text: "Hi there!" },
];

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <section className={s.postFormSection}>
        <h2 className={s.subheading}>My posts</h2>
        <form action="echo.htmlacademy.com" className={s.postForm}>
          <textarea name="text" id="post-text" cols="100" rows="5">
            ...Type your text
          </textarea>
          <button type="submit">Post</button>
        </form>
      </section>
      <section className={s.posts}>
        <Post message={messages[0].text} user={messages[0].user} />
        <Post message={messages[1].text} user={messages[1].user} />
      </section>
    </div>
  );
};

export default MyPosts;
