import {getUserAuthData} from "./auth-reducer";

const app: string = "samuraijs";
const reducer: string = "app";

const SET_INITIALIZING_SUCCESS: string = `${app}/${reducer}/SET_INITIALIZING_SUCCESS`;
const initialState: initialStateType = {
  isInitialized: false,
};

const setInitializingSuccess = (): InitializingSuccessType => ({
  type: SET_INITIALIZING_SUCCESS,
  isInitialized: true,
});

export const initializeApp = () => {
  return (dispatch: Function) => {
    const dispatchers: Array<Function> = [dispatch(getUserAuthData())];

    Promise.all(dispatchers).then(() => {
      dispatch(setInitializingSuccess());
    });
  };
};

const appReducer = (state = initialState, action: InitializingSuccessType) => {
  switch (action.type) {
    case SET_INITIALIZING_SUCCESS:
      return {...state, isInitialized: action.isInitialized};
    default:
      return state;
  }
};

// Types:
type InitializingSuccessType = {
  type: typeof SET_INITIALIZING_SUCCESS,
  isInitialized: boolean,
}

type initialStateType = {
  isInitialized: boolean,
}

export default appReducer;
