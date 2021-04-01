import {RootState} from './redux-store';

export const getAllUsers = (state: RootState) => {
  return state.usersPage.users;
};

export const getCurrentPage = (state: RootState) => {
  return state.usersPage.currentPage;
};

export const getCurrentSection = (state: RootState) => {
  return state.usersPage.currentSection;
};

export const getSectionSize = (state: RootState) => {
  return state.usersPage.sectionSize;
};

export const getUsersCount = (state: RootState) => {
  return state.usersPage.usersCount;
};

export const getUsersPerPage = (state: RootState) => {
  return state.usersPage.usersPerPage;
};

export const getIsFetching = (state: RootState) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: RootState) => {
  return state.usersPage.followingInProgress;
};
