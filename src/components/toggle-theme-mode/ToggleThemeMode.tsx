import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { toggleThemeMode, useAppDispatch, useAppSelector } from '../../store';
import { ThemeModeEnum } from '../../types';

export const ToggleThemeMode = () => {
  const dispatch = useAppDispatch();
  const { themeMode } = useAppSelector((state) => state.ui);

  const handleToggleThemeMode = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <IconButton onClick={handleToggleThemeMode}>
      {themeMode === ThemeModeEnum.LIGHT ? <DarkModeOutlined /> : <LightModeOutlined />}
    </IconButton>
  );
};
