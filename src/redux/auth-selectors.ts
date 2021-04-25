import {RootState} from "./redux-store";

export function getIsAuthState(state: RootState) {
  return state.auth.isAuth;
}

export function getCaptchaUrlState(state: RootState) {
  return state.auth.captchaUrl;
}

export function getMyIdState(state: RootState) {
  return state.auth.userId;
}

export function getLoginState(state: RootState) {
  return state.auth.login;
}

export function getIsFetchingState(state: RootState) {
  return state.auth.isFetching;
}
