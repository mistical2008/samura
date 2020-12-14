import { usersAPI } from '../api/usersAPI';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_USERS_PER_PAGE = "SET_USERS_PER_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setUsersCount = (count) => ({
  type: SET_USERS_COUNT,
  usersCount: count,
});
export const setUsersPerPage = (size) => ({
  type: SET_USERS_PER_PAGE,
  usersPerPage: size,
});
export const toggleIsFetching = (bool) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: bool,
});
export const toggleFollowingInProgress = (bool, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching: bool,
  userId: userId,
})
export const unfollowThunkCreator = (userId) => {
  return (userId) => {
    toggleFollowingInProgress(true, userId);
    usersAPI
      .unfollow(userId)
      .then((data) => {
        toggleFollowingInProgress(false, userId);
        if (data.resultCode === 0) {
          unfollow(userId);
        }
      })
      .catch((err) => console.log(err));
  }
}

const initialState = {
  users: [],
  currentPage: 1,
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
    case SET_USERS_COUNT:
      return { ...state, usersCount: action.usersCount };
    case SET_USERS_PER_PAGE:
      return { ...state, usersPerPage: action.usersPerPage };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state, followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }
    default:
      return state;
  }
};

export default usersReducer;
