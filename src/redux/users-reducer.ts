import {UserShape} from '../types/base';
import {usersAPI} from "../api/api";
import {Dispatch} from 'redux';
import {AppAsyncThunk, AppThunk, InferValuesTypes} from './redux-store';

const actions = {
  follow: (userId: number) => ({type: 'FOLLOW', userId} as const),

  unfollow: (userId: number) => ({type: 'UNFOLLOW', userId} as const),

  setUsers: (users: UserShape[]) => ({type: 'SET_USERS', users} as const),

  setCurrentPage: (page: number) => ({type: 'SET_CURRENT_PAGE', page} as const),

  setCurrentSection: (sectionNumber: number) => ({
    type: 'SET_CURRENT_SECTION',
    sectionNumber,
  } as const),

  setUsersCount: (count: number) => ({
    type: 'SET_USERS_COUNT',
    usersCount: count,
  } as const),

  setUsersPerPage: (size: number) => ({
    type: 'SET_USERS_PER_PAGE',
    usersPerPage: size,
  } as const),

  toggleIsFetching: (bool: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching: bool,
  } as const),

  toggleFollowingInProgress: (bool: boolean, userId: number) => ({
    type: 'TOGGLE_FOLLOWING_IN_PROGRESS',
    isFetching: bool,
    userId: userId,
  } as const),
}

export const unfollow = (userId: number): AppAsyncThunk<ActionTypes> => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch(actions.toggleFollowingInProgress(true, userId));
      const responce = await usersAPI
        .unfollow(userId)

      dispatch(actions.toggleFollowingInProgress(false, userId));
      if (responce.resultCode === 0) {
        dispatch(actions.unfollow(userId));
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export const follow = (userId: number): AppAsyncThunk<ActionTypes> => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try { dispatch(actions.toggleFollowingInProgress(true, userId));
      const response = await usersAPI
        .follow(userId)

      dispatch(actions.toggleFollowingInProgress(false, userId));
      if (response.resultCode === 0) {
        dispatch(actions.follow(userId));
      } 
    } catch (err) {
        console.error(err);
    }
  };
};

export const getUsers = (usersPerPage: number, pageNumber: number): AppAsyncThunk<ActionTypes> => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try { dispatch(actions.toggleIsFetching(true));
      const response = await usersAPI
        .fetchUsers(usersPerPage, pageNumber)

      dispatch(actions.toggleIsFetching(false));
      dispatch(actions.setUsers(response.items));
      dispatch(actions.setUsersCount(response.totalCount)); 
    } catch (err) {
      console.error(err);
    }
  };
};

export const changePage = (pageNumber: number): AppThunk<void, ActionTypes> => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(actions.setCurrentPage(pageNumber));
  };
};

export const setCurrentSection = (sectionNumber: number): AppThunk<void, ActionTypes> => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch(actions.setCurrentSection(sectionNumber));
  };
};

type ActionTypes = ReturnType<InferValuesTypes<typeof actions>>;

const initialState = {
  users: [] as UserShape[],
  currentPage: 1,
  currentSection: 1,
  sectionSize: 10,
  usersCount: 0,
  usersPerPage: 5,
  isFetching: false,
  followingInProgress: [] as number[],
};
type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: ActionTypes): InitialState => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      };
    case 'UNFOLLOW':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      };
    case 'SET_USERS':
      return {...state, users: action.users};
    case 'SET_CURRENT_PAGE':
      return {...state, currentPage: action.page};
    case 'SET_CURRENT_SECTION':
      return {...state, currentSection: action.sectionNumber};
    case 'SET_USERS_COUNT':
      return {...state, usersCount: action.usersCount};
    case 'SET_USERS_PER_PAGE':
      return {...state, usersPerPage: action.usersPerPage};
    case 'TOGGLE_IS_FETCHING':
      return {...state, isFetching: action.isFetching};
    case 'TOGGLE_FOLLOWING_IN_PROGRESS':
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
