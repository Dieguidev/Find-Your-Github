import { CardMedia, Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Description from './Description';
import PrincipalInformation from './PrincipalInformation';

const UsersCard = ({ users }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: '15px' }}
    >
      <Grid item xs={3}>
        <CardMedia
          component='img'
          alt='GitHub Image'
          image={users.avatar_url}
          sx={{
            borderRadius: '50%',
            marginLeft: '5px'
          }}

        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction='column'
          spacing={1}
          sx={{margin: '30px'}}
        >
        <PrincipalInformation users={users} />
        <Description users={users} />
        </Stack>
      </Grid>
    </Grid>

  );
};

export default UsersCard;