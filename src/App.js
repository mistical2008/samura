import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  const { posts, dialogs, messages } = props.data;
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/dialogs"
            render={() => <Dialogs dialogs={dialogs} messages={messages} />}
          />
          <Route
            exact
            path="/profile"
            render={() => <Profile posts={posts} />}
          />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </div>
    </Router>
  );
}

export default App;
