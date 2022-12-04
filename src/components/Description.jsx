import { Grid, Paper, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

const Description = ({ users }) => {

 

  return (
    <>
      <Stack sx={{ justifyContent: 'center' }}>
        {users.bio !== null ?
          <Typography variant='body1'>{users.bio}</Typography > : <Typography variant='body1'>No hay información</Typography>
        }
        {/* <Typography>
          {users.bio}
        </Typography> */}
      </Stack>

      <Paper elevation={3}>
        <Stack
          spacing={3}
          direction={{ xs: 'column', sm: 'row' }}
          sx={{ justifyContent: 'space-evenly', margin: '20px' }}
        >
          <Stack>
            <Typography variant='h5'>Repos</Typography>
            <Typography variant='h6'>{users.public_repos}</Typography>
          </Stack>   
          <Stack>
            <Typography variant='h5'>Followers</Typography>
            <Typography variant='h6'>{users.followers}</Typography>
          </Stack>
          <Stack>
            <Typography variant='h5'>Following</Typography>
            <Typography variant='h6'>{users.following}</Typography>
          </Stack>
        </Stack>
      </Paper>

      <Grid
      direction={{ xs: 'column', sm: 'row' }}
        container
        spacing={2}
        sx={{ marginTop: '15px' }}
      >
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <LocationOnIcon />
            <Typography>{users.location}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <TwitterIcon />
            {
              users.twitter_username !== null
                ? <Typography>@{users.twitter_username}</Typography>
                : <Typography>Not Available</Typography>
            }

          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <LanguageIcon />
            {
              users.blog !== null
                ? <a target='_blank' href={`https://${users.blog}`}><Typography>{users.blog}</Typography> </a>
                : <Typography>Not Available</Typography>
            }
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction='row' spacing={2}>
            <BusinessIcon />
            {
              users.company !== null
                ? <Typography>{users.company}</Typography>
                : <Typography>Not Available</Typography>
            }
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Description;