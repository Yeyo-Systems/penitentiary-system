import { useState } from 'react';

import { ArrowBackIosNew, ArrowForwardIos, MoreVert } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { toggleSidebar, useAppDispatch, useAppSelector } from '../../../store';

export const ToggleSidebarButton = () => {
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((state) => state.ui);

  const [isMouseHover, setIsMouseHover] = useState(false);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Tooltip
      title={isSidebarOpen ? 'Cerrar la barra lateral' : 'Abrir la barra lateral'}
      placement="right"
      arrow
      sx={{ fontSize: '20px', backgroundColor: 'red' }}
    >
      <IconButton
        onClick={handleToggleSidebar}
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
        sx={{
          position: 'absolute',
          left: '0px',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          '&:hover': { bgcolor: 'transparent' },
        }}
      >
        {isSidebarOpen ? (
          isMouseHover ? (
            <ArrowBackIosNew />
          ) : (
            <MoreVert />
          )
        ) : isMouseHover ? (
          <ArrowForwardIos />
        ) : (
          <MoreVert />
        )}
      </IconButton>
    </Tooltip>
  );
};
