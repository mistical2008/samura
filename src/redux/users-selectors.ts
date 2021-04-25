import {RootState} from './redux-store';

export function getAllUsersState (state: RootState) {
  return state.usersPage.users;
};

export function getCurrentPageState (state: RootState) {
  return state.usersPage.currentPage;
};

export function getCurrentSectionState (state: RootState) {
  return state.usersPage.currentSection;
};

export function getSectionSizeState (state: RootState) {
  return state.usersPage.sectionSize;
};

export function getUsersCountState (state: RootState) {
  return state.usersPage.usersCount;
};

export function getUsersPerPageState (state: RootState) {
  return state.usersPage.usersPerPage;
};

export function getIsFetchingState (state: RootState) {
  return state.usersPage.isFetching;
};

export function getFollowingInProgressState(state: RootState) {
  return state.usersPage.followingInProgress;
};
