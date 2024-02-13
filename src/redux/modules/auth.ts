import { User } from '@shiva/db/user.type';
import { AnyAction } from 'redux';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_USERNAME_INPUT = 'SET_USERNAME_INPUT';
export const SET_PASSWORD_INPUT = 'SET_PASSWORD_INPUT';

export type LoginUserAction = {
  type: string;
  payload: User;
};

export const loginUser = (payload: LoginUserAction['payload']) => ({
  type: LOGIN_USER,
  payload,
});
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const setUsernameInput = (payload: string) => ({
  type: SET_USERNAME_INPUT,
  payload,
});
export const setPasswordInput = (payload: string) => ({
  type: SET_PASSWORD_INPUT,
  payload,
});

export type AuthState = {
  isLoggedIn: false;
  user: null;
  usernameInput: string;
  passwordInput: string;
};
export const authInitialState: AuthState = {
  isLoggedIn: false,
  user: null,
  usernameInput: '',
  passwordInput: '',
};

export const authReducer = (state: AuthState = authInitialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT_USER:
      return authInitialState;
    default:
      return state;
    case SET_USERNAME_INPUT:
      return {
        ...state,
        usernameInput: action.payload,
      };
    case SET_PASSWORD_INPUT:
      return {
        ...state,
        passwordInput: action.payload,
      };
  }
};
