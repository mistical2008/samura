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
  const { profilePage, dialogsPage, sidebar } = props.state;
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navigation state={sidebar} />
        <div className="app-wrapper-content">
          <Route
            exact
            path="/dialogs"
            render={() => <Dialogs state={dialogsPage} />}
          />
          <Route
            exact
            path="/profile"
            render={() => <Profile state={profilePage} />}
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
