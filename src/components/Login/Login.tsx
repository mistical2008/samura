import React, {FC, ReactElement} from "react";
import { RootState } from '../../redux/redux-store';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../redux/auth-reducer";
import LoginForm from "../LoginForm/LoginForm";
import s from "./Login.module.css";
import {getCaptchaUrlState, getIsAuthState} from "../../redux/auth-selectors";

type MapStateToProps = {
  isAuth: boolean,
  captchaUrl: string | null,
};

type MapDispatchToProps = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captchaUrl?: string | null
  ) => Promise<void>;
};

type FormData = { 
  email: string,
  password: string,
  rememberMe: boolean, 
  captchaUrl?: string | null
}

const Login: FC<MapDispatchToProps & MapStateToProps> = (props): ReactElement => {
  const { login, isAuth, captchaUrl } = props;
  const submit = (formData: FormData) => {
    const { email, password, rememberMe, captchaUrl } = formData;
    login(email, password, rememberMe, captchaUrl);
  };

  if (isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={s.loginWrapper}>
      <h1>Login</h1>
      <LoginForm onSubmit={submit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state: RootState): MapStateToProps => ({
  isAuth: getIsAuthState(state),
  captchaUrl: getCaptchaUrlState(state),
});

export default connect(mapStateToProps, { login })(Login);
