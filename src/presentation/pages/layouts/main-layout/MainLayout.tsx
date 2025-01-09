import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { MainContainer, Sidebar, Topbar } from '../../../components';

export const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Topbar />
      <Box sx={{ display: 'flex', flex: 1, marginTop: '64px' }}>
        <Sidebar />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Box>
    </Box>
  );
};
