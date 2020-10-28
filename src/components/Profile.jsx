import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.pageCover}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Germany-Farchant-Landscape.JPG/800px-Germany-Farchant-Landscape.JPG"
          alt="Germany Farchant Landscape"
        />
      </div>
      <section className={s.bio}>
        <h2 className={s.subheading}>Ava + Description</h2>
      </section>
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
          <div id="post-1">Post 1</div>
          <div id="post-2">Post 2</div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
