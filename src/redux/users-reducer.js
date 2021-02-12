import { usersAPI } from "../api/api";

const app = "samuraijs";
const reducer = "users";

const FOLLOW = `${app}/${reducer}/FOLLOW`;
const UNFOLLOW = `${app}/${reducer}/UNFOLLOW`;
const SET_USERS = `${app}/${reducer}/SET_USERS`;
const SET_CURRENT_PAGE = `${app}/${reducer}/SET_CURRENT_PAGE`;
const SET_USERS_COUNT = `${app}/${reducer}/SET_USERS_COUNT`;
const SET_USERS_PER_PAGE = `${app}/${reducer}/SET_USERS_PER_PAGE`;
const TOGGLE_IS_FETCHING = `${app}/${reducer}/TOGGLE_IS_FETCHING`;
const TOGGLE_FOLLOWING_IN_PROGRESS = `${app}/${reducer}/TOGGLE_FOLLOWING_IN_PROGRESS`;
const SET_CURRENT_SECTION = "SET_CURRENT_SECTION";

const followAction = (userId) => ({ type: FOLLOW, userId });
const unfollowAction = (userId) => ({ type: UNFOLLOW, userId });
const setUsersAction = (users) => ({ type: SET_USERS, users });
const setCurrentPageAction = (page) => ({ type: SET_CURRENT_PAGE, page });
const setCurrentSectionAC = (sectionNumber) => ({
  type: SET_CURRENT_SECTION,
  sectionNumber,
});

const setUsersCountAction = (count) => ({
  type: SET_USERS_COUNT,
  usersCount: count,
});

const setUsersPerPageAction = (size) => ({
  type: SET_USERS_PER_PAGE,
  usersPerPage: size,
});

const toggleIsFetchingAction = (bool) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: bool,
});

const toggleFollowingInProgressAction = (bool, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching: bool,
  userId: userId,
});

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingInProgressAction(true, userId));
    const responce = await usersAPI
      .unfollow(userId)
      .catch((err) => console.error(err));

    dispatch(toggleFollowingInProgressAction(false, userId));
    if (responce.resultCode === 0) {
      dispatch(unfollowAction(userId));
    }
  };
};

export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingInProgressAction(true, userId));
    const response = await usersAPI
      .follow(userId)
      .catch((err) => console.error(err));

    dispatch(toggleFollowingInProgressAction(false, userId));
    if (response.resultCode === 0) {
      dispatch(followAction(userId));
    }
  };
};

export const getUsers = (usersPerPage, pageNumber) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingAction(true));
    const response = await usersAPI
      .fetchUsers(usersPerPage, pageNumber)
      .catch((err) => console.error(err));

    dispatch(toggleIsFetchingAction(false));
    dispatch(setUsersAction(response.items));
    dispatch(setUsersCountAction(response.totalCount));
  };
};

export const changePage = (pageNumber) => {
  return (dispatch) => {
    dispatch(setCurrentPageAction(pageNumber));
  };
};

export const setCurrentSection = (sectionNumber) => {
  return (dispatch) => {
    dispatch(setCurrentSectionAC(sectionNumber));
  };
};

const initialState = {
  users: [],
  currentPage: 1,
  currentSection: 1,
  sectionSize: 10,
  usersCount: 0,
  usersPerPage: 5,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    case SET_CURRENT_SECTION:
      return { ...state, currentSection: action.sectionNumber };
    case SET_USERS_COUNT:
      return { ...state, usersCount: action.usersCount };
    case SET_USERS_PER_PAGE:
      return { ...state, usersPerPage: action.usersPerPage };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export default usersReducer;
