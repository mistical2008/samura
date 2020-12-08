import "./App.css";
import "./index.css";
import { Redirect, Route } from "react-router-dom";
import React from "react";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  // console.log("App props: ", props);
  return (
    <div className="app-wrapper">
      <Header />
      <NavigationContainer />
      <div className="app-wrapper-content">
        <Redirect
          exact
          from="/"
          to="/profile"
          render={() => <ProfileContainer />}
        />
        <Route exact path="/" render={() => <ProfileContainer />} />
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route exact path="/users" render={() => <UsersContainer />} />
        <Route exact path="/news" component={News} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
