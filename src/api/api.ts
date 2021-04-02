import axios from "axios";
import {PhotosShape, ProfileShape} from "../types/base";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "285a2ecc-40bb-4abe-bf10-4dd0e2c34c42",
  },
});

type UserResShape = {id: number, name: string, status: string | null, photos: PhotosShape, followed: boolean}
type UsersResShape = {items: UserResShape[], totalCount: number, error: string | null}
type BaseResShape<T = {}> = {resultCode: number, messages: null | string[], data: T};
type ProfilePhotoResShape = BaseResShape<PhotosShape>;
type AuthMeResShape = BaseResShape<{id: number, email: string, login: string}>;
type CaptchaUrlRes = {url: string};

export const usersAPI = {
  async fetchUsers(usersPerPage = 10, currentPage = 1) {
    try {
      const response = await instance
        .get<UsersResShape>(`users?count=${usersPerPage}&page=${currentPage}`)
        .catch((err) => console.error(err));
      if (response) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  },


  async follow(userId: number) {
    try {
      const response = await instance
        .post<BaseResShape>(`follow/${userId}`)
        .catch((err) => console.error(err));
      if (response) {
        return response.data;
      }
    } catch (err) {
      return err;
    }
  },

  async unfollow(userId: number) {
    try {
      const response = await instance
        .delete<BaseResShape>(`follow/${userId}`)
        .catch((err) => console.error(err));
      if (response) {
        return response.data;
      }
    } catch (err) {
      return err;
    }
  },

  getUserProfile(userId: number) {
    console.warn("Obsolette method. Please user profileAPI object.");
    profileAPI.getUserProfile(userId);
  },
};

export const profileAPI = {
  async getUserProfile(userId: number) {
    try {
      const response = await instance
        .get<ProfileShape>(`profile/${userId}`)
        .catch((err) => console.error(err));
      if (response) {
        return response.data;
      }
    } catch (err) {
      return err;
    }
  },

  async updateUserProfile(profile: ProfileShape) {
    debugger;
    try {
      const response = await instance
        .put<BaseResShape>(`profile`, profile)
        .catch((err) => console.error(err));
      if (response) {
        return response.data;
      }
    } catch (err) {
      return err;
    }
  },

  async getUserStatus(userId: number) {
    try {
      const response = await instance
        .get<string>(`profile/status/${userId}`)
        .catch((err) => console.error(err));
      if (response) {
        return response.data;
      }
    } catch (err) {
      return err;
    }
  },

  async updateUserStatus(status: string) {
    try {
      const response = await instance
        .put<BaseResShape>(`profile/status`, {status: status})
        .catch((err) => console.error(err));
      if (response) {
        return response.data;
      }
    } catch (err) {
      return err;
    }
  },

  async updateUserPhoto(photo: any) {
    try {
      const formData = new FormData();
      formData.append("image", photo);

      const response = await instance
        .put<ProfilePhotoResShape>(`profile/photo`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .catch((err) => console.error(err));
      if (response) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  },
};

export const authAPI = {
  async getMe() {
    try {
      const response = await instance.get<AuthMeResShape>(`auth/me`);
      if (response) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  },

  async login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
    try {
      const response = await instance.post<BaseResShape>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      });
      if (response) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  },

  async logout() {
    try {
      const response = await instance.delete<BaseResShape>(`auth/login`);
      if (response) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  },
};

export const securityAPI = {
  async getCaptcha() {
    const response = await instance.get<CaptchaUrlRes>(`security/get-captcha-url`);
    return response.data;
  },
};
