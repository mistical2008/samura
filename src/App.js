import React from "react";
import { Route } from "react-router-dom";
import "./index.css";
import "./App.css";

import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  // console.log("App props: ", props);
  const { profilePage, dialogsPage, sidebar } = props.state;
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation state={sidebar} />
      <div className="app-wrapper-content">
        <Route
          exact
          path="/dialogs"
          render={() => (
            <Dialogs
              state={dialogsPage}
              updateNewMessageText={props.updateNewMessageText}
              addMessage={props.addMessage}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => (
            <Profile
              state={profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route exact path="/news" component={News} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
