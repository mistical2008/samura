const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_USERS_PER_PAGE = "SET_USERS_PER_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setUsersCountAC = (count) => ({
  type: SET_USERS_COUNT,
  usersCount: count,
});
export const setUsersPerPageAC = (size) => ({
  type: SET_USERS_PER_PAGE,
  usersPerPage: size,
});
export const toggleIsFetchingAC = (bool) => ({type: TOGGLE_IS_FETCHING, isFetching: bool})

const initialState = {
  users: [],
  currentPage: 1,
  usersCount: 0,
  usersPerPage: 5,
  isFetching: false,
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
      return { ...state, isFetching: action.isFetching }
    default:
      return state;
  }
};

export default usersReducer;
