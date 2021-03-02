import { Field, reduxForm } from "redux-form";
import React from "react";
import {
  maxLength,
  minLength,
  required,
} from "../../utils/validators/validators";
import { Input } from "../FormControls/FormControls.jsx";
import s from "./LoginForm.module.css";

const minLength8 = minLength(8);
const maxLength32 = maxLength(32);
// const required = required();

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={s.loginForm}>
      <Field
        type="email"
        name="email"
        placeholder="Login"
        component={Input}
        validate={[required, minLength8, maxLength32]}
      />
      <Field
        type="password"
        name="password"
        placeholder="Password"
        component={Input}
        validate={[required, minLength8, maxLength32]}
      />
      <div className={s.submitWrapper}>
        {error && <div className={s.formError}>{error}</div>}
        {captchaUrl && (
          <>
            <img src={captchaUrl} />
            <Field type="text" name="captcha" id="captcha" component={Input} />
          </>
        )}
        <Field
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          component="input"
        />
        <label htmlFor="rememberMe">remember me</label>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "login" })(LoginForm);
