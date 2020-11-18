import "./App.css";
import "./index.css";

import { Route } from "react-router-dom";
import React from "react";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navigation from "./components/Navigation/Navigation";
import NavigationContainer from './components/Navigation/NavigationContainer';
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

function App() {
  // console.log("App props: ", props);
  return (
    <div className="app-wrapper">
      <Header />
      <NavigationContainer />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/news" component={News} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
