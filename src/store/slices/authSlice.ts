import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearCredentials(state) {
      state.token = null;
    },
    setCredentials(state, action) {
      state.token = action.payload;
    },
  },
});

export const { clearCredentials, setCredentials } = authSlice.actions;
