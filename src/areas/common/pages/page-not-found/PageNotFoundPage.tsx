import { Box, Typography } from '@mui/material';

export const PageNotFoundPage = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box>
        <Typography variant="h2" component="h1">
          404 - Página no encontrada
        </Typography>
      </Box>
    </Box>
  );
};
