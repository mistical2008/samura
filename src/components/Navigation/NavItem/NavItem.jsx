import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={s.item}>
      <NavLink to={props.href} activeClassName={s.activeLink}>{props.text}</NavLink>
    </li>
  );
};

export default NavItem;
