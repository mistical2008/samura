import React from "react";
import s from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={s.item}>
      <a href={props.href}>{props.text}</a>
    </li>
  );
};

export default NavItem;
