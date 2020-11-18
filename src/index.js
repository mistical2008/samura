import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/redux-store";

import App from "./App";
import StoreContext from "./StoreContext";

import "./App.css";

const renderApp = () => {
  // console.log("State: %s", state);
  ReactDOM.render(
    <Router>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </Router>,
    document.getElementById("root")
  );
};
renderApp();

store.subscribe(() => {
  renderApp();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
