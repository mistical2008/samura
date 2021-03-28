import {stopSubmit} from "redux-form";
import {authAPI, securityAPI} from "../api/api";
import {AnyAction} from 'redux';
import {TEmail, TLogin, TUrl, TUserId} from "../types/base";

const app = "samuraijs";
const reducer = "auth";

type ConstType = string;
const SET_USER_AUTH_DATA: ConstType = `${app}/${reducer}/SET_USER_AUTH_DATA`;
const TOGGLE_IS_FETCHING: ConstType = `${app}/${reducer}TOGGLE_IS_FETCHING`;
const SET_CAPTCHA: ConstType = `${app}/${reducer}/SET_CAPTCHA`;

type TAuthUserData = {
  type: typeof SET_USER_AUTH_DATA,
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
  isAuth: boolean): TAuthUserData => ({
    type: SET_USER_AUTH_DATA,
    data: {userId, email, login, isAuth},
  });

type TSetCaptcha = {
  type: typeof SET_CAPTCHA,
  url: string,
};
const setCaptcha = (url: string): TSetCaptcha => ({
  type: SET_CAPTCHA,
  url,
});

export const getUserAuthData = () => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetchingAction(true));
    const response = await authAPI.getMe().catch((err: any) => console.error(err));

    if (response.data.resultCode === 0) {
      const {id, email, login} = response.data.data;
      dispatch(toggleIsFetchingAction(false));
      dispatch(setUserAuthData(id, email, login, true));
    }
  };
};

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl = null) => {
  return async (dispatch: any) => {
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

export const getCaptcha = () => {
  return async (dispatch: any) => {
    const {url} = await securityAPI.getCaptcha();
    dispatch(setCaptcha(url));
  };
};

export const logout = () => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetchingAction);
    const response = await authAPI.logout().catch((err: any) => console.error(err));

    if (response.data.resultCode === 0) {
      dispatch(setUserAuthData(null, null, null, false));
    }
  };
};

type TToggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean,
};
const toggleIsFetchingAction = (bool: boolean): TToggleIsFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: bool,
});

const initialState = {
  userId: null as TUserId,
  email: null as TEmail,
  login: null as TLogin,
  isAuth: false as boolean,
  isFetching: false as boolean,
  captchaUrl: null as TUrl,
};
type TInitialState = typeof initialState;

const authReducer = (state = initialState, action: AnyAction): TInitialState => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
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
