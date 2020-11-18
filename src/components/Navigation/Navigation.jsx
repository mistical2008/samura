import React from "react";
import Friends from "../Friends/Friends";
import s from "./Navigation.module.css";
import NavItem from "./NavItem/NavItem";

const Navigation = (props) => {
  const items = props.items;
  const widgets = props.widgets;

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
};

export default Navigation;
