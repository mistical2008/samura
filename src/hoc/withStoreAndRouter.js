import React from "react";
import store from "../redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const withStoreAndRouter = (WrappedComponent) => {
  return (props) => (
    <Router>
      <Provider store={store}>
        <WrappedComponent {...props} />
      </Provider>
    </Router>
  );
};

export default withStoreAndRouter;
