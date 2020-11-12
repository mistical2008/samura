import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { BrowserRouter as Router } from "react-router-dom";

export const renderApp = (state) => {
  // console.log("State: %s", state);
  ReactDOM.render(
    <Router>
      <App state={state} addPost={addPost} />
    </Router>,
    document.getElementById("root")
  );
};
