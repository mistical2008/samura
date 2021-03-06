import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const app = "samuraijs";
const reducer = "auth";

const SET_USER_AUTH_DATA = `${app}/${reducer}/SET_USER_AUTH_DATA`;
const TOGGLE_IS_FETCHING = `${app}/${reducer}TOGGLE_IS_FETCHING`;
const SET_CAPTCHA = `${app}/${reducer}/SET_CAPTCHA`;

const setUserAuthData = (userId, email, login, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  data: { userId, email, login, isAuth },
});

const setCaptcha = (url) => ({
  type: SET_CAPTCHA,
  url,
});

export const getUserAuthData = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingAction(true));
    const response = await authAPI.getMe().catch((err) => console.error(err));

    if (response.data.resultCode === 0) {
      const { id, email, login } = response.data.data;
      dispatch(toggleIsFetchingAction(false));
      dispatch(setUserAuthData(id, email, login, true));
    }
  };
};

export const login = (email, password, rememberMe, captchaUrl = null) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingAction(true));
    const response = await authAPI
      .login(email, password, rememberMe, captchaUrl)
      .catch((err) => console.error(err));

    if (response.data.resultCode === 0) {
      dispatch(getUserAuthData());
    } else if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
    } else {
      // let [firstMessage] = response.data.messages;
      let { messages } = response.data;
      let firstMessage =
        messages.length > 0 ? messages[0] : "Some error occurred.";
      dispatch(stopSubmit("login", { _error: firstMessage }));
    }
  };
};

export const getCaptcha = () => {
  return async (dispatch) => {
    const { url } = await securityAPI.getCaptcha();
    dispatch(setCaptcha(url));
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingAction);
    const response = await authAPI.logout().catch((err) => console.error(err));

    if (response.data.resultCode === 0) {
      dispatch(setUserAuthData(null, null, null, false));
    }
  };
};

const toggleIsFetchingAction = (bool) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: bool,
});

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return { ...state, ...action.data };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_CAPTCHA:
      return { ...state, captchaUrl: action.url };
    default:
      return state;
  }
};

export default authReducer;
