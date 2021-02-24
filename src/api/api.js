import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "285a2ecc-40bb-4abe-bf10-4dd0e2c34c42",
  },
});

export const usersAPI = {
  async fetchUsers(usersPerPage = 10, currentPage = 1) {
    const response = await instance
      .get(`users?count=${usersPerPage}&page=${currentPage}`)
      .catch((err) => console.error(err));
    return response.data;
  },

  async follow(userId) {
    const response = await instance
      .post(`follow/${userId}`)
      .catch((err) => console.error(err));
    return response.data;
  },

  async unfollow(userId) {
    const response = await instance
      .delete(`follow/${userId}`)
      .catch((err) => console.error(err));
    return response.data;
  },

  getUserProfile(userId) {
    console.warn("Obsolette method. Please user profileAPI object.");
    profileAPI.getUserProfile(userId);
  },
};

export const profileAPI = {
  async getUserProfile(userId) {
    const response = await instance
      .get(`profile/${userId}`)
      .catch((err) => console.error(err));
    return response.data;
  },

  async getUserStatus(userId) {
    const response = await instance
      .get(`profile/status/${userId}`)
      .catch((err) => console.error(err));
    return response.data;
  },

  async updateUserStatus(status) {
    const response = await instance
      .put(`profile/status`, { status: status })
      .catch((err) => console.error(err));
    return response.data;
  },

  async updateUserPhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);

    const response = await instance
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((err) => console.error(err));
    return response.data;
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
