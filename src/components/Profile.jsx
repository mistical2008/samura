import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div className="page-cover">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Germany-Farchant-Landscape.JPG/800px-Germany-Farchant-Landscape.JPG"
          alt="Germany Farchant Landscape"
        />
      </div>
      <section className="bio">
        <h2 className="subheading">Ava + Description</h2>
      </section>
      <div className="my-posts">
        <section className="post-form-section">
          <h2 className="subheading">My posts</h2>
          <form action="echo.htmlacademy.com" className="post-form">
            <textarea name="text" id="post-text" cols="100" rows="5">
              ...Type your text
            </textarea>
            <br></br>
            <button type="submit">Post</button>
          </form>
        </section>
        <section className="posts">
          <div id="post-1">Post 1</div>
          <div id="post-2">Post 2</div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
