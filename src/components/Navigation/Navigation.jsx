import React from "react";
import s from "./Navigation.module.css"
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
      </ul>
    </nav>
  );
};

export default Navigation;
