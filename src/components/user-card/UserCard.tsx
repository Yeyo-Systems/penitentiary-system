import { EditOutlined, DeleteOutlined, EmailOutlined } from '@mui/icons-material';
import { Card, Avatar, CardContent, Typography, CardActions, IconButton, Box, Tooltip, useTheme } from '@mui/material';

import { User } from '../../types';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const theme = useTheme();

  const handleSendEmail = () => {
    console.log('Send email:', user.email);
  };

  const handleEditUser = () => {
    console.log('Edit user:', user);
  };

  const handleDeleteUser = () => {
    console.log('Delete user:', user);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        height: '100%',
        borderRadius: '16px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', m: 2 }}>
        <Avatar
          sx={{
            width: 96,
            height: 96,
            background: `${theme.palette.grey[200]}`,
            border: `1px solid ${theme.palette.divider}`,
          }}
          src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`}
          alt={user.name}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h2" component="div" sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '28px' }}>
            {user.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: '14px', lineHeight: '20px' }}>
            {user.username}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Tooltip title={`Enviar email: ${user.email}`} placement="top" arrow>
            <IconButton aria-label="send email" onClick={handleSendEmail}>
              <EmailOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Editar" placement="top" arrow>
            <IconButton aria-label="edit" onClick={handleEditUser}>
              <EditOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Eliminar" placement="top" arrow>
            <IconButton aria-label="delete" onClick={handleDeleteUser}>
              <DeleteOutlined />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
};
