import { Box, Container, Grid2 } from '@mui/material';

import { Loader } from '../../../../components';
import { UserCard } from '..';

import { useGetUsersQuery } from '../../../../store';

export const TestComponent = () => {
  const { data: users, isLoading: isLoadingUsers } = useGetUsersQuery();

  return (
    <Container
      maxWidth="lg"
      sx={{ px: 2, py: 3 }}
    >
      <Grid2
        container
        spacing={4}
      >
        {isLoadingUsers ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', m: 4 }}>
            <Loader />
          </Box>
        ) : (
          users?.map((user) => (
            <Grid2
              size={{ xs: 2, sm: 4, md: 4 }}
              offset={{ md: 'auto' }}
              key={user.id}
            >
              <UserCard user={user} />
            </Grid2>
          ))
        )}
      </Grid2>
    </Container>
  );
};
