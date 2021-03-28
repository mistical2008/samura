import {AnyAction} from 'redux';

import {TUserId, TUsersArray} from '../types/base';
import {usersAPI} from "../api/api";
import {TAppDispatch} from './redux-store';

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
const SET_CURRENT_SECTION = `${app}/${reducer}/SET_CURRENT_SECTION`;

type TFollowAction = {type: typeof FOLLOW, userId: TUserId};
const followAction = (userId: TUserId): TFollowAction => ({type: FOLLOW, userId});

type TUnfollow = {type: typeof UNFOLLOW, userId: TUserId};
const unfollowAction = (userId: TUserId): TUnfollow => ({type: UNFOLLOW, userId});

type TSetUsers = {type: typeof SET_USERS, users: TUsersArray};
const setUsersAction = (users: TUsersArray): TSetUsers => ({type: SET_USERS, users});

type TSetCurrentPage = {type: typeof SET_CURRENT_PAGE, page: number};
const setCurrentPageAction = (page: number): TSetCurrentPage => ({type: SET_CURRENT_PAGE, page});

type TSetCurrentSection = {
  type: typeof SET_CURRENT_SECTION,
  sectionNumber: number,
};
const setCurrentSectionAC = (sectionNumber: number): TSetCurrentSection => ({
  type: SET_CURRENT_SECTION,
  sectionNumber,
});

type TSetUsersCount = {
  type: typeof SET_USERS_COUNT,
  usersCount: number,
};
const setUsersCountAction = (count: number): TSetUsersCount => ({
  type: SET_USERS_COUNT,
  usersCount: count,
});

type TSetUsersPerPage = {
  type: typeof SET_USERS_PER_PAGE,
  usersPerPage: number,
};
const setUsersPerPageAction = (size: number): TSetUsersPerPage => ({
  type: SET_USERS_PER_PAGE,
  usersPerPage: size,
});

type TToggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING,
  isFetching: boolean,
};
const toggleIsFetchingAction = (bool: boolean): TToggleIsFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching: bool,
});

type TToggleFollowingInProgress = {
  type: typeof TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching: boolean,
  userId: TUserId,
};
const toggleFollowingInProgressAction = (bool: boolean, userId: TUserId): TToggleFollowingInProgress => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching: bool,
  userId: userId,
});

export const unfollow = (userId: TUserId) => {
  return async (dispatch: TAppDispatch) => {
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

export const follow = (userId: TUserId) => {
  return async (dispatch: TAppDispatch) => {
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

export const getUsers = (usersPerPage: number, pageNumber: number) => {
  return async (dispatch: TAppDispatch) => {
    dispatch(toggleIsFetchingAction(true));
    const response = await usersAPI
      .fetchUsers(usersPerPage, pageNumber)
      .catch((err) => console.error(err));

    dispatch(toggleIsFetchingAction(false));
    dispatch(setUsersAction(response.items));
    dispatch(setUsersCountAction(response.totalCount));
  };
};

export const changePage = (pageNumber: number) => {
  return (dispatch: TAppDispatch) => {
    dispatch(setCurrentPageAction(pageNumber));
  };
};

export const setCurrentSection = (sectionNumber: number) => {
  return (dispatch: TAppDispatch) => {
    dispatch(setCurrentSectionAC(sectionNumber));
  };
};

const initialState = {
  users: [] as TUsersArray,
  currentPage: 1,
  currentSection: 1,
  sectionSize: 10,
  usersCount: 0,
  usersPerPage: 5,
  isFetching: false,
  followingInProgress: [] as Array<number>,
};
type TInitialState = typeof initialState;

const usersReducer = (state = initialState, action: AnyAction): TInitialState => {
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
      return {...state, users: [...action.users] as TUsersArray};
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
