import React from "react";
import s from "./Navigation.module.css";
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul>
        <NavItem href="/profile" text="Profile" />
        <NavItem href="/dialogs" text="Messages" />
        <NavItem href="/news" text="News" />
        <NavItem href="/music" text="Music" />
        <NavItem href="/settings" text="Settings" />
      </ul>
    </nav>
  );
};

export default Navigation;
