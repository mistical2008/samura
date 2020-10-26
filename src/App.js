import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={logo} alt="" />
      </header>
      <nav className="navigation">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="page-cover">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Germany-Farchant-Landscape.JPG/800px-Germany-Farchant-Landscape.JPG" alt="Germany Farchant Landscape"/>
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
              </textarea><br></br>
              <button type="submit">Post</button>
            </form>
          </section>
          <section className="posts">
            <div id="post-1">Post 1</div>
            <div id="post-2">Post 2</div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
