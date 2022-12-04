import React from 'react';
import { Stack, } from '@mui/system';
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Home = ({ searchUser }) => {

  const [valueInput, setValueInput] = useState('');

  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%'
      }}

    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder='Octocat'
        variant="outlined"
        size='small'
        value={valueInput}
        onChange={e => setValueInput(e.target.value)}
        sx={{
          width: '90%',
        }} />
      <IconButton
        onClick={() => searchUser(valueInput)}
        size='small'
        sx={{
          left: '-45px'
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Home;