import { Link as RouterLink, useLocation } from 'react-router-dom';

import { AdminPanelSettingsOutlined, DashboardOutlined } from '@mui/icons-material';
import { Drawer as MuiDrawer, Divider, List, Box, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';

import { useAppSelector } from '../../../store';
import { ADMIN_POLICY, PrivateElement, USER_POLICY } from '../../../routes';

interface StyledSidebarProps {
  isSidebarOpen: boolean;
  sidebarWidth: number;
}

const propKeys = ['isSidebarOpen', 'sidebarWidth'];

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => !propKeys.includes(String(prop)),
})<StyledSidebarProps>(({ theme, sidebarWidth, isSidebarOpen }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: isSidebarOpen ? sidebarWidth : 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!isSidebarOpen && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
  },
}));

export const Sidebar = () => {
  const location = useLocation();
  const { sidebarWidth, topbarHeight, isSidebarOpen } = useAppSelector((state) => state.ui);

  return (
    <StyledDrawer variant="permanent" sidebarWidth={sidebarWidth} isSidebarOpen={isSidebarOpen}>
      <Box sx={{ height: `${topbarHeight}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        ¿Logo?
      </Box>
      <Divider />
      <List component="nav">
        <PrivateElement roles={USER_POLICY}>
          <ListItemButton component={RouterLink} to="/dashboard" selected={location.pathname === '/dashboard'}>
            <ListItemIcon>
              <DashboardOutlined />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </PrivateElement>

        <Divider sx={{ my: 1 }} />

        <PrivateElement roles={ADMIN_POLICY}>
          <ListItemButton component={RouterLink} to="/admin" selected={location.pathname === '/admin'}>
            <ListItemIcon>
              <AdminPanelSettingsOutlined />
            </ListItemIcon>
            <ListItemText primary="Administración" />
          </ListItemButton>
        </PrivateElement>
      </List>
    </StyledDrawer>
  );
};
