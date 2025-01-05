import { createSlice } from '@reduxjs/toolkit';

import { ThemeModeEnum } from '../../types';

interface UiState {
  themeMode: ThemeModeEnum;
}

const initialState: UiState = {
  themeMode: ThemeModeEnum.LIGHT,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleThemeMode(state) {
      state.themeMode = state.themeMode === ThemeModeEnum.LIGHT ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT;
    },
  },
});

export const { toggleThemeMode } = uiSlice.actions;
