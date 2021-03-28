import React from "react";
import {NavLink} from "react-router-dom";
import s from "./NavItem.module.css";


type TNavItemProps = {
  href: string,
  text: string,
}

const NavItem = (props: TNavItemProps) => {
  const {href, text} = props;
  return (
    <li className={s.item}>
      <NavLink to={href} activeClassName={s.activeLink}>{text}</NavLink>
    </li>
  );
};

export default NavItem;
