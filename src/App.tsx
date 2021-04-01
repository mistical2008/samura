import "./App.css";
import "./index.css";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import {initializeApp} from "./redux/app-reducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavigationContainer from "./components/Navigation/NavigationContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Preloader from "./components/Preloader/Preloader";
import withStoreAndRouter from "./hoc/withStoreAndRouter";
import withSuspense from "./hoc/withSuspense";
import NotFound from "./components/404/404";
import {TAppProps} from "./types/base";
import {RootState} from "./redux/redux-store";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));

const App = (props: TAppProps) => {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.isInitialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper" >
      <HeaderContainer />
      <NavigationContainer />
      <div className="app-wrapper-content" >
        <Switch>
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route exact path="/login" render={withSuspense(Login)} />
          <Route
            exact
            path="/dialogs"
            render={withSuspense(DialogsContainer)}
          />
          <Route exact path="/users" render={withSuspense(UsersContainer)} />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={withSuspense(Settings)} />
          <Route exact path="/profile" render={ProfileContainer} />
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  isInitialized: state.app.isInitialized,
});

const AppContainer = compose(
  withStoreAndRouter,
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

export default AppContainer;
