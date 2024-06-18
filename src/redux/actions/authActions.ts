import { createAction } from '@reduxjs/toolkit';
import { AuthResponse } from '../../services/interfaces/Auth';

export const login = createAction<AuthResponse>('auth/login');
export const logout = createAction<AuthResponse>('auth/logout');
