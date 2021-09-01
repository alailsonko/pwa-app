import { Dispatch } from 'redux';
import api from '../../../api';

import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT,
} from './signup.types';

interface AddAccount {
  username: string;
  password: string;
}

interface ActionDispatchType {
  type: string;
  payload?: any;
}

export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

export const signupSuccess = (signupData: AddAccount) => ({
  type: SIGNUP_SUCCESS,
  payload: signupData,
});

export const signupFailure = (error: Error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signup =
  (signupData: AddAccount) =>
  async (dispatch: Dispatch<ActionDispatchType>) => {
    dispatch(signupRequest());
    await api
      .post('/signup', signupData)
      .then((response: any) => dispatch(signupSuccess(response.data)))
      .catch((error: any) => dispatch(signupFailure(error.message)));
  };

export const logoutSuccess = () => ({
  type: LOGOUT,
});

export const logout = () => async (dispatch: Dispatch<ActionDispatchType>) => {
  dispatch(logoutSuccess());
};
