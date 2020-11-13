import state, { subscribe } from "./redux/state";

import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

window.state = state;

import {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText,
} from "./redux/state";
import App from "./App";

const renderApp = (state) => {
  // console.log("State: %s", state);
  ReactDOM.render(
    <Router>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </Router>,
    document.getElementById("root")
  );
};
renderApp(state);

subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
