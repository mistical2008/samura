import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const setUserAuthData = (userId, email, login, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  data: { userId, email, login, isAuth },
});

export const getUserAuthData = () => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAction(true));
    authAPI
      .getMe()
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data;
          dispatch(toggleIsFetchingAction(false));
          dispatch(setUserAuthData(id, email, login, true));
        }
      })
      .catch((err) => console.log(err));
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAction(true));
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getUserAuthData());
      } else {
        // let [firstMessage] = response.data.messages;
        let { messages } = response.data;
        let firstMessage =
          messages.length > 0 ? messages[0] : "Some error occurred.";
        dispatch(stopSubmit("login", { _error: firstMessage }));
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAction);
    authAPI.logout().then((response) => {
      if (response.resultCode === 0) {
        dispatch(setUserAuthData(null, null, null, false));
      }
    });
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
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return { ...state, ...action.data };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default authReducer;
