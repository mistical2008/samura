import React from "react";
import Friends from "../Friends/Friends";
import s from "./Navigation.module.css";
import StoreConext from "../../StoreContext";
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
  return (
    <StoreConext.Consumer>
      {(store) => {
        const { items, widgets } = store.getState().sidebar;

        const navItems = items.map((item) => {
          return <NavItem href={"/" + item.href} text={item.name} />;
        });

        return (
          <div className={s.sidebar}>
            <nav className={s.navigation}>
              <ul>{navItems}</ul>
            </nav>
            <div className={s.widgets}>
              <Friends className={s.widget} state={widgets[0]["my-friends"]} />
            </div>
          </div>
        );
      }}
    </StoreConext.Consumer>
  );
};

export default Navigation;
