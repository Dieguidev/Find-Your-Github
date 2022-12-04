import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const PrincipalInformation = ({ users }) => {
  return (
    <>
      <Stack
        direction='row'
        sx={{justifyContent:'space-between'}}
      >
        <Typography variant='h4'>{users.name}</Typography>
        <Typography variant='subtitle2'>{new Date(users.created_at).toLocaleDateString('en-us')}</Typography>
      </Stack>
      <Typography variant='caption'>@{users.login}</Typography>
    </>
  );
};

export default PrincipalInformation;