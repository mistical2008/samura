import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./App.css";
import store from "./redux/state";

window.state = store.getState();

const renderApp = (store) => {
  // console.log("State: %s", state);
  ReactDOM.render(
    <Router>
      <App
        state={store.getState()}
        addPost={store.addPost}
        updateNewPostText={store.updateNewPostText}
        addMessage={store.addMessage}
        updateNewMessageText={store.updateNewMessageText}
      />
    </Router>,
    document.getElementById("root")
  );
};
renderApp(store);

store.subscribe(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
