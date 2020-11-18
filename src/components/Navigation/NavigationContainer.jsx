import React from "react";

import Navigation from "./Navigation";
import StoreConext from "../../StoreContext";

const NavigationContainer = () => {
  return (
    <StoreConext.Consumer>
      {(store) => {
        const { items, widgets } = store.getState().sidebar;

        return <Navigation items={items} widgets={widgets} />;
      }}
    </StoreConext.Consumer>
  );
};

export default NavigationContainer;
