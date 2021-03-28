import {getUserAuthData} from "./auth-reducer";
import {AnyAction} from 'redux';

const app: string = "samuraijs";
const reducer: string = "app";

const SET_INITIALIZING_SUCCESS: string = `${app}/${reducer}/SET_INITIALIZING_SUCCESS`;

type initialStateType = {
  isInitialized: boolean,
}
const initialState: initialStateType = {
  isInitialized: false,
};

type InitializingSuccessType = {
  type: typeof SET_INITIALIZING_SUCCESS,
  isInitialized: boolean,
}
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

const appReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_INITIALIZING_SUCCESS:
      return {...state, isInitialized: action.isInitialized};
    default:
      return state;
  }
};

export default appReducer;
