import {getUserAuthData} from "./auth-reducer";
import {InferValuesTypes} from "./redux-store";

type InitialState = {
  isInitialized: boolean,
}
const initialState: InitialState = {
  isInitialized: false,
};

const actions = {
  setInitializingSuccess: () => ({
    type: 'SET_INITIALIZING_SUCCESS',
    isInitialized: true,
  } as const)
}

type ActionTypes = ReturnType<InferValuesTypes<typeof actions>>;

export const initializeApp = () => {
  return (dispatch: Function) => {
    const dispatchers: Array<Function> = [dispatch(getUserAuthData())];

    Promise.all(dispatchers).then(() => {
      dispatch(actions.setInitializingSuccess());
    });
  };
};

const appReducer = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case 'SET_INITIALIZING_SUCCESS':
      return {...state, isInitialized: action.isInitialized};
    default:
      return state;
  }
};

export default appReducer;
