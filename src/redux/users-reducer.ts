import {User} from '../types/base';
import {usersAPI} from "../api/api";
import {Dispatch} from 'redux';
import {AppAsyncThunk, AppThunk} from './redux-store';

const FOLLOW = `FOLLOW`;
const UNFOLLOW = `UNFOLLOW`;
const SET_USERS = `SET_USERS`;
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`;
const SET_USERS_COUNT = `SET_USERS_COUNT`;
const SET_USERS_PER_PAGE = `SET_USERS_PER_PAGE`;
const TOGGLE_IS_FETCHING = `TOGGLE_IS_FETCHING`;
const TOGGLE_FOLLOWING_IN_PROGRESS = `TOGGLE_FOLLOWING_IN_PROGRESS`;
const SET_CURRENT_SECTION = `SET_CURRENT_SECTION`;

type FollowAction = {type: typeof FOLLOW, userId: number};
const followAction = (userId: number): FollowAction => ({type: FOLLOW, userId});

type Unfollow = {type: typeof UNFOLLOW, userId: number};
const unfollowAction = (userId: number): Unfollow => ({type: UNFOLLOW, userId});

type SetUsers = {type: typeof SET_USERS, users: User[]};
const setUsersAction = (users: User[]): SetUsers => ({type: SET_USERS, users});

type SetCurrentPage = {type: typeof SET_CURRENT_PAGE, page: number};
const setCurrentPageAction = (page: number): SetCurrentPage => ({type: SET_CURRENT_PAGE, page});

type SetCurrentSection = {
  type: typeof SET_CURRENT_SECTION,
  sectionNumber: number,
};
const setCurrentSectionAC = (sectionNumber: number): SetCurrentSection => ({
  type: SET_CURRENT_SECTION,
  sectionNumber,
});

type SetUsersCount = {
  type: typeof SET_USERS_COUNT,
  usersCount: number,
};
const setUsersCountAction = (count: number): SetUsersCount => ({
  type: SET_USERS_COUNT,
  usersCount: count,
});

type SetUsersPerPage = {
  type: typeof SET_USERS_PER_PAGE,
  usersPerPage: number,
};
const setUsersPerPageAction = (size: number): SetUsersPerPage => ({
  type: SET_USERS_PER_PAGE,
  usersPerPage: size,
});

type ToggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean,
};
const toggleIsFetchingAction = (bool: boolean): ToggleIsFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: bool,
});

type ToggleFollowingInProgress = {
  type: typeof TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching: boolean,
  userId: number,
};
const toggleFollowingInProgressAction = (bool: boolean, userId: number): ToggleFollowingInProgress => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching: bool,
  userId: userId,
});

export const unfollow = (userId: number): AppAsyncThunk<UserActions> => {
  return async (dispatch: Dispatch<UserActions>) => {
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

export const follow = (userId: number): AppAsyncThunk<UserActions> => {
  return async (dispatch: Dispatch<UserActions>) => {
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

export const getUsers = (usersPerPage: number, pageNumber: number): AppAsyncThunk<UserActions> => {
  return async (dispatch: Dispatch<UserActions>) => {
    dispatch(toggleIsFetchingAction(true));
    const response = await usersAPI
      .fetchUsers(usersPerPage, pageNumber)
      .catch((err) => console.error(err));

    dispatch(toggleIsFetchingAction(false));
    dispatch(setUsersAction(response.items));
    dispatch(setUsersCountAction(response.totalCount));
  };
};

export const changePage = (pageNumber: number): AppThunk<void, UserActions> => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch(setCurrentPageAction(pageNumber));
  };
};

export const setCurrentSection = (sectionNumber: number): AppThunk<void, UserActions> => {
  return (dispatch: Dispatch<UserActions>) => {
    dispatch(setCurrentSectionAC(sectionNumber));
  };
};

type UserActions =
  | SetUsers
  | SetCurrentPage
  | SetCurrentSection
  | SetUsersCount
  | SetUsersPerPage
  | ToggleIsFetching
  | ToggleFollowingInProgress
  | FollowAction
  | Unfollow;

const initialState = {
  users: [] as User[],
  currentPage: 1,
  currentSection: 1,
  sectionSize: 10,
  usersCount: 0,
  usersPerPage: 5,
  isFetching: false,
  followingInProgress: [] as number[],
};
type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: UserActions): InitialState => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      };
    case SET_USERS:
      return {...state, users: action.users};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page};
    case SET_CURRENT_SECTION:
      return {...state, currentSection: action.sectionNumber};
    case SET_USERS_COUNT:
      return {...state, usersCount: action.usersCount};
    case SET_USERS_PER_PAGE:
      return {...state, usersPerPage: action.usersPerPage};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
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
