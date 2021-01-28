import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import LoginForm from "../LoginForm/LoginForm";
import s from "./Login.module.css";

const Login = ({ login, isAuth }) => {
  const submit = (formData) => {
    const { email, password, rememberMe } = formData;
    login(email, password, rememberMe);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={s.loginWrapper}>
      <h1>Login</h1>
      <LoginForm onSubmit={submit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
