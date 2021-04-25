import {combineReducers, createStore, applyMiddleware, Action} from "redux";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<R = void, A extends Action = Action> = ThunkAction<
  R,
  RootState,
  unknown,
  A
>

export type AppAsyncThunk<A extends Action = Action> = AppThunk<Promise<void>, A>

export type InferValuesTypes<T> = T extends {[key: string]: infer U} ? U : never;

export default store;
