import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Navigation from "./Navigation";

const mapStateToProps = (state) => {
  return {
    items: state.sidebar.items,
    widgets: state.sidebar.widgets,
  };
};

export default compose(connect(mapStateToProps))(Navigation);
