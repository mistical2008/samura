import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./App.css";
import store from "./redux/redux-store";

const renderApp = (state) => {
  // console.log("State: %s", state);
  ReactDOM.render(
    <Router>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </Router>,
    document.getElementById("root")
  );
};
renderApp(store.getState());

store.subscribe(() => {
  const state = store.getState();
  renderApp(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
