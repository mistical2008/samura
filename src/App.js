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
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className="content">
        <section className="bio">
          <h2 className="subheading">Ava + Description</h2>
        </section>
        <section className="post-form-section">
          <h2 className="subheading">My posts</h2>
          <form action="echo.htmlacademy.com" className="post-form">
            <textarea name="text" id="post-text" cols="100" rows="5">
              ...Type your text
            </textarea>
            <button type="submit">Post</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
