import "./App.css";
import "./index.css";
import { Redirect, Route } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import React, { useEffect } from "react";
import { initializeApp } from "./redux/app-reducer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import News from "./components/News/News";
import Preloader from "./components/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  });

  if (!props.isInitialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavigationContainer />
      <div className="app-wrapper-content">
        <Redirect
          exact
          from="/"
          to="/profile"
          render={() => <ProfileContainer />}
        />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route exact path="/users" render={() => <UsersContainer />} />
        <Route exact path="/news" component={News} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/settings" component={Settings} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
