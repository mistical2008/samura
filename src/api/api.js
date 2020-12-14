import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "285a2ecc-40bb-4abe-bf10-4dd0e2c34c42",
  },
});

export const usersAPI = {
  getUsers(usersPerPage = 10, currentPage = 1) {
    return instance
      .get(`users?count=${usersPerPage}&page=${currentPage}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },

  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};

export const authAPI = {
  getMe() {
    return instance.get(`auth/me`);
  },
};
