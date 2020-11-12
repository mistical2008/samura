import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import {
  addMessage,
  addPost,
  updateNewMessageText,
  updateNewPostText,
} from "./redux/state";
import App from "./App";

export const renderApp = (state) => {
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
