import { createSlice } from '@reduxjs/toolkit';

import { RoleEnum } from '../../types';

interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
  isUser: boolean;
  isAdmin: boolean;
}

const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
  isUser: false,
  isAdmin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearCredentials(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.isUser = false;
      state.isAdmin = false;
    },
    setCredentials(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
      state.isUser = action.payload.role === RoleEnum.USER;
      state.isAdmin = action.payload.role === RoleEnum.ADMIN;
    },
  },
});

export const { clearCredentials, setCredentials } = authSlice.actions;
