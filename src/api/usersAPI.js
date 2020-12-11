import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
        headers: {
            "API-KEY": "285a2ecc-40bb-4abe-bf10-4dd0e2c34c42",
        },
})

export const usersAPI = {
    getUsers(usersPerPage, currentPage) {
        return instance
        .get(
            `users?count=${usersPerPage}&page=${currentPage}`,
        )
    }
}
