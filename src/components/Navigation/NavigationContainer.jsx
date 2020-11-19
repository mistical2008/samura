import React from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation";

// const NavigationContainer = () => {
// return (
// <StoreConext.Consumer>
// {(store) => {
// const { items, widgets } = store.getState().sidebar;
//
// return <Navigation items={items} widgets={widgets} />;
// }}
// </StoreConext.Consumer>
// );
// };
const mapStateToProps = (state) => {
  return {
    items: state.sidebar.items,
    widgets: state.sidebar.widgets,
  };
};

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;
