import { ReactNode } from 'react';

import { Box, useTheme } from '@mui/material';

import { ToggleSidebarButton } from '..';

import { useAppSelector } from '../../../store';

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
  const theme = useTheme();
  const { topbarHeight } = useAppSelector((state) => state.ui);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.background.default,
        flexGrow: 1,
        height: `calc(100vh - ${topbarHeight}px)`,
        marginTop: `${topbarHeight}px`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <ToggleSidebarButton />
      <Box
        sx={{
          height: '100%',
          overflow: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
