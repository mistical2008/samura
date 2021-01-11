import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "285a2ecc-40bb-4abe-bf10-4dd0e2c34c42",
  },
});

export const usersAPI = {
  fetchUsers(usersPerPage = 10, currentPage = 1) {
    return instance
      .get(`users?count=${usersPerPage}&page=${currentPage}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  },

  follow(userId) {
    return instance
      .post(`follow/${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  },

  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  },

  getUserProfile(userId) {
    console.warn("Obsolette method. Please user profileAPI object.");
    profileAPI.getUserProfile(userId);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance
      .get(`profile/${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  },

  getUserStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  },

  updateUserStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  },
};

export const authAPI = {
  getMe() {
    return instance.get(`auth/me`);
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },

  logout() {
    return instance.delete(`auth/login`);
  },
};
