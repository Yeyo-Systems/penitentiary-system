import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { toggleThemeMode, useAppDispatch, useAppSelector } from '../../store';
import { ThemeModeEnum } from '../../types';

export const ToggleThemeModeButton = () => {
  const dispatch = useAppDispatch();
  const { themeMode } = useAppSelector((state) => state.ui);

  const handleToggleThemeMode = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <Tooltip
      title={themeMode === ThemeModeEnum.LIGHT ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      placement="bottom"
      arrow
    >
      <IconButton color="inherit" onClick={handleToggleThemeMode}>
        {themeMode === ThemeModeEnum.LIGHT ? <DarkModeOutlined /> : <LightModeOutlined />}
      </IconButton>
    </Tooltip>
  );
};
