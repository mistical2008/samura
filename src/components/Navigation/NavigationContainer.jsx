import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getItemsState, getWidgetsState } from "../../redux/sidebar-selectors";

import Navigation from "./Navigation";

const mapStateToProps = (state) => {
  return {
    items: getItemsState(state),
    widgets: getWidgetsState(state),
  };
};

export default compose(connect(mapStateToProps))(Navigation);
