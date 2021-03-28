import {combineReducers, createStore, applyMiddleware} from "redux";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
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

// export type TRootReducer = typeof rootReducer;
// export type TAppState = ReturnType<TRootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
