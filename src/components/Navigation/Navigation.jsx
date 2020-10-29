import React from "react";
import s from "./Navigation.module.css";
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <NavItem text="Profile" />
        <NavItem text="Messages" />
        <NavItem text="News" />
        <NavItem text="Music" />
        <NavItem text="Settings" />
      </ul>
    </nav>
  );
};

export default Navigation;
