import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from '../actions/authActions';
import { AuthResponse } from '../../services/interfaces/Auth';

export const initialState: AuthResponse = {
  id            : 0,
  username      : '',
  email         : '',
  firstName     : '',
  lastName      : '',
  gender        : '',
  image         : '',
  token         : '',
  refreshToken  : '',
};


const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(logout, (state,action) => {
      return { ...state, ...action.payload };
    });
});

export default authReducer;

