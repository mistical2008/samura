import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from 'redux-form'

const Login = () => {
  const submit = (formData) => {
    console.log(formData);
  }

  return (
    <div className={s.loginWrapper}>
      <h1>Login</h1>
      <LoginFormRedux handleSubmit={submit} />
    </div>
  );
};

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
      <form onSubmit={ handleSubmit }>
        <Field type="text" name="login" placeholder="Login" component="input" />
        <Field type="password" name="password" placeholder="Password" component="input" />
        <Field type="checkbox" name="rememberMe" component="input" /> remember me
        <button type="submit">Login</button>
      </form>
  )
}

const LoginFormRedux = reduxForm({
  form: "login",
})(LoginForm);

export default Login;