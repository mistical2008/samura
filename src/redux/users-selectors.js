export const getAllUsers = (state) => {
  return state.usersPage.users;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getCurrentSection = (state) => {
  return state.usersPage.currentSection;
};

export const getSectionSize = (state) => {
  return state.usersPage.sectionSize;
};

export const getUsersCount = (state) => {
  return state.usersPage.usersCount;
};

export const getUsersPerPage = (state) => {
  return state.usersPage.usersPerPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
