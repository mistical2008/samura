import { Field, reduxForm } from 'redux-form'
import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import s from "./Login.module.css";

const Login = () => {
  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={s.loginWrapper}>
      <h1>Login</h1>
      <LoginForm handleSubmit={submit} />
    </div>
  );
};

export default Login;

