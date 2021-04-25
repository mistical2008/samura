import {RootState} from "./redux-store";

export function getItemsState(state: RootState) {
  return state.sidebar.items;
}

export function getWidgetsState(state: RootState) {
  return state.sidebar.widgets;
}
