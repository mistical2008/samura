import React from "react";
import ReactDOM from "react-dom";

import store from "../redux/redux-store";
import { Provider } from "react-redux";

const withStore = ({ children }) => {
  <Provider store={store}>{children}</Provider>;
};

export default withStore;
