import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { SimpleContainer } from '../../../components';

export const SimpleLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SimpleContainer>
        <Outlet />
      </SimpleContainer>
    </Box>
  );
};
