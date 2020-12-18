import { authAPI } from "../api/api";

const SET_USER_AUTH_DATA = "SET_USER_AUTH_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const setUserAuthDataAction = (userId, email, login) => ({
  type: SET_USER_AUTH_DATA,
  data: { userId, email, login },
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
          dispatch(setUserAuthDataAction(id, email, login));
        }
      })
      .catch((err) => console.log(err));
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
      return { ...state, ...action.data, isAuth: true };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export default authReducer;
