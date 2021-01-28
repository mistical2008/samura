import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../logo.svg";
import s from "./Header.module.css";

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="" />
      <div className={s.userBlock}>
        {isAuth ? (
          <div>
            {login} <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
