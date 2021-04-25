import {RootState} from "./redux-store";

export function getAppIsInitializedState(state: RootState) {
  return state.app.isInitialized;
}
