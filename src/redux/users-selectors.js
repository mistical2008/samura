export const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getUsersCount = (state) => {
    return state.usersPage.usersCount;
}

export const getUsersPerPage = (state) => {
    return state.usersPage.usersPerPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}