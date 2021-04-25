import {RootState} from "./redux-store";

export function getProfileState(state: RootState) {
  return state.profilePage.profile;
}

export function getStatusState(state: RootState) {
  return state.profilePage.status;
}

export function getProfilePostsState(state: RootState) {
  return state.profilePage.posts;
}
