import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLength,
  minLength,
  required,
} from "../../utils/validators/validators";
import { Input } from "../FormControls/FormControls";
import s from "./LoginForm.module.css";
import {FormProps} from "../../types/base";
import { Button } from '@chakra-ui/react'

const minLength8 = minLength(8);
const maxLength32 = maxLength(32);

type FormData = { 
  email: string,
  password: string,
  rememberMe: boolean, 
  captcha?: string | null 
} & {}

type OwnProps = {
  captchaUrl: string | null
} & {};

const LoginForm = ({ handleSubmit, error, captchaUrl }: FormProps<FormData, OwnProps>) => {
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
            <img src={captchaUrl} alt="" />
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
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default reduxForm<FormData, OwnProps>({ form: "login" })(LoginForm);
