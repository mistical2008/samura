import {getUserAuthData} from "./auth-reducer";

const app: string = "samuraijs";
const reducer: string = "app";

const SET_INITIALIZING_SUCCESS: string = `${app}/${reducer}/SET_INITIALIZING_SUCCESS`;

type InitialState = {
  isInitialized: boolean,
}
const initialState: InitialState = {
  isInitialized: false,
};

type InitializingSuccess = {
  type: typeof SET_INITIALIZING_SUCCESS,
  isInitialized: boolean,
}
const setInitializingSuccess = (): InitializingSuccess => ({
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

export type AppActions = InitializingSuccess;

const appReducer = (state = initialState, action: AppActions): InitialState => {
  switch (action.type) {
    case SET_INITIALIZING_SUCCESS:
      return {...state, isInitialized: action.isInitialized};
    default:
      return state;
  }
};

export default appReducer;
