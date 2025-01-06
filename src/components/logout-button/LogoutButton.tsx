import { Logout } from '@mui/icons-material';
import { Tooltip, IconButton } from '@mui/material';

import { clearCredentials, useAppDispatch } from '../../store';

export const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(clearCredentials());
  };

  return (
    <Tooltip title="Cerrar sesión" placement="bottom" arrow>
      <IconButton color="inherit" onClick={handleLogout}>
        <Logout />
      </IconButton>
    </Tooltip>
  );
};
