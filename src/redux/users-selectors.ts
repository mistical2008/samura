import {TRootState} from './redux-store';

export const getAllUsers = (state: TRootState) => {
  return state.usersPage.users;
};

export const getCurrentPage = (state: TRootState) => {
  return state.usersPage.currentPage;
};

export const getCurrentSection = (state: TRootState) => {
  return state.usersPage.currentSection;
};

export const getSectionSize = (state: TRootState) => {
  return state.usersPage.sectionSize;
};

export const getUsersCount = (state: TRootState) => {
  return state.usersPage.usersCount;
};

export const getUsersPerPage = (state: TRootState) => {
  return state.usersPage.usersPerPage;
};

export const getIsFetching = (state: TRootState) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: TRootState) => {
  return state.usersPage.followingInProgress;
};
