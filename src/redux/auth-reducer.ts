import {Dispatch} from "react";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI, securityAPI} from "../api/api";
import {TEmail, TLogin, TUserId} from "../types/base";
import {AppAsyncThunk, InferValuesTypes} from "./redux-store";

export type ActionTypes = ReturnType<InferValuesTypes<typeof actions>>;
export type AuthDispatch = Dispatch<ActionTypes>
export type AuthAsyncThunk = AppAsyncThunk<ActionTypes>

const actions = {
  setUserAuthData: (
      userId: number | null,
      email: string | null,
      login: string | null,
      isAuth: boolean) => ({
        type: 'SET_AUTH_USER_DATA',
        data: {userId, email, login, isAuth},
      } as const),

  setCaptcha: (url: string) => ({
      type: 'SET_CAPTCHA',
      url,
    } as const),

  toggleIsFetchingAction: (bool: boolean) => ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching: bool,
    } as const),
  }

export const getUserAuthData = (): AuthAsyncThunk => {
  return async (dispatch: AuthDispatch) => {
    try { dispatch(actions.toggleIsFetchingAction(true));
      const response = await authAPI.getMe()

      if (response && response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(actions.toggleIsFetchingAction(false));
        dispatch(actions.setUserAuthData(id, email, login, true));
      } 
    } catch (err) {
      console.error(err);
    }
  };
};

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl: (string | null) = null): AuthAsyncThunk => {
  return async (dispatch: Dispatch<ActionTypes | AuthAsyncThunk | FormAction>) => {
    try { dispatch(actions.toggleIsFetchingAction(true));
      const response = await authAPI
        .login(email, password, rememberMe, captchaUrl)

      if (response && response.resultCode === 0) {
        dispatch(getUserAuthData());
      } else if (response && response.resultCode === 10) {
        dispatch(getCaptcha());
      } else {
        // let [firstMessage] = response.data.messages;
        if (response) {
          let {messages} = response;
          let firstMessage =
            messages &&
            messages.length > 0 ? messages[0] : "Some error occurred.";
          dispatch(stopSubmit("login", {_error: firstMessage}));
        }
      } 
    } catch (err) {
      console.error(err);
    }
  };
};

export const getCaptcha = (): AuthAsyncThunk => {
  return async (dispatch: AuthDispatch) => {
    try { const {url} = await securityAPI.getCaptcha();
      dispatch(actions.setCaptcha(url)); 
    } catch (err) {
      console.error(err);
    }
  };
};

export const logout = (): AuthAsyncThunk => {
  return async (dispatch: AuthDispatch) => {
    try { dispatch(actions.toggleIsFetchingAction(true));
      const response = await authAPI.logout()

      if (response && response.resultCode === 0) {
        dispatch(actions.setUserAuthData(null, null, null, false));
      } 
    } catch (err) {
      console.error(err);
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

const authReducer = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case 'SET_AUTH_USER_DATA':
      return {...state, ...action.data};
    case 'TOGGLE_IS_FETCHING':
      return {...state, isFetching: action.isFetching};
    case 'SET_CAPTCHA':
      return {...state, captchaUrl: action.url};
    default:
      return state;
  }
};

export default authReducer;
