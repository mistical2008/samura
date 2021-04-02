import {Dispatch} from "react";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI, securityAPI} from "../api/api";
import {TEmail, TLogin, TUserId} from "../types/base";
import {AppAsyncThunk} from "./redux-store";

const SET_AUTH_USER_DATA = `SET_USER_AUTH_DATA`;
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_CAPTCHA = `SET_CAPTCHA`;

export type AuthActions = AuthUserData | SetCaptcha | ToggleIsFetching;
export type AuthDispatch = Dispatch<AuthActions>
export type AuthAsyncThunk = AppAsyncThunk<AuthActions>

type AuthUserData = {
  type: typeof SET_AUTH_USER_DATA,
  data: {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  },
}
const setUserAuthData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean): AuthUserData => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth},
  });

type SetCaptcha = {
  type: typeof SET_CAPTCHA,
  url: string,
};
const setCaptcha = (url: string): SetCaptcha => ({
  type: SET_CAPTCHA,
  url,
});

type ToggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean,
};
const toggleIsFetchingAction = (bool: boolean): ToggleIsFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: bool,
});

export const getUserAuthData = (): AuthAsyncThunk => {
  return async (dispatch: AuthDispatch) => {
    dispatch(toggleIsFetchingAction(true));
    const response = await authAPI.getMe().catch((err: any) => console.error(err));

    if (response.data.resultCode === 0) {
      const {id, email, login} = response.data.data;
      dispatch(toggleIsFetchingAction(false));
      dispatch(setUserAuthData(id, email, login, true));
    }
  };
};

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl = null): AuthAsyncThunk => {
  return async (dispatch: Dispatch<AuthActions | AuthAsyncThunk | FormAction>) => {
    dispatch(toggleIsFetchingAction(true));
    const response = await authAPI
      .login(email, password, rememberMe, captchaUrl)
      .catch((err: any) => console.error(err));

    if (response.data.resultCode === 0) {
      dispatch(getUserAuthData());
    } else if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
    } else {
      // let [firstMessage] = response.data.messages;
      let {messages} = response.data;
      let firstMessage =
        messages.length > 0 ? messages[0] : "Some error occurred.";
      dispatch(stopSubmit("login", {_error: firstMessage}));
    }
  };
};

export const getCaptcha = (): AuthAsyncThunk => {
  return async (dispatch: AuthDispatch) => {
    const {url} = await securityAPI.getCaptcha();
    dispatch(setCaptcha(url));
  };
};

export const logout = (): AuthAsyncThunk => {
  return async (dispatch: AuthDispatch) => {
    dispatch(toggleIsFetchingAction(true));
    const response = await authAPI.logout().catch((err: any) => console.error(err));

    if (response.data.resultCode === 0) {
      dispatch(setUserAuthData(null, null, null, false));
    }
  };
};

const initialState = {
  userId: null as TUserId,
  email: null as TEmail,
  login: null as TLogin,
  isAuth: false as boolean,
  isFetching: false as boolean,
  captchaUrl: null as (null | string),
};
type InitialState = typeof initialState;

const authReducer = (state = initialState, action: AuthActions): InitialState => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {...state, ...action.data};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case SET_CAPTCHA:
      return {...state, captchaUrl: action.url};
    default:
      return state;
  }
};

export default authReducer;
