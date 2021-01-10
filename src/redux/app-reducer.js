import { getUserAuthData } from "./auth-reducer";

const SET_INITIALIZING_SUCCESS = "SET_INITIALIZING_SUCCESS";
const initialState = {
  isInitialized: false,
};

const setInitializingSuccess = () => ({
  type: SET_INITIALIZING_SUCCESS,
  isInitialized: true,
});

export const initializeApp = () => {
  return (dispatch) => {
    const dispatchers = [dispatch(getUserAuthData())];

    Promise.all(dispatchers).then(() => {
      dispatch(setInitializingSuccess());
    });
  };
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZING_SUCCESS:
      return { ...state, isInitialized: action.isInitialized };
    default:
      return state;
  }
};

export default appReducer;
