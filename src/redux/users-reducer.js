const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export const followAC = () => ({ type: FOLLOW, userId });
export const unfollowAC = () => ({ type: UNFOLLOW, userId });
export const setUsersAC = () => ({ type: SET_USERS });

const initialState = {
  users: [
    {
      id: 1,
      avatarUrl: "",
      fullName: "Dmitriy K.",
      description: "Hi! I like to live!",
      followed: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
    case UNFOLLOW:
    case SET_USERS:
    default:
      return state;
  }
};

export default usersReducer;
