import React from 'react';

import About from './About';
import Achievements from './Achievements';
import Coding from './Coding';
import History from './History';
import MenuAppBar from './MenuAppBar';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import 'fontsource-roboto';

function App({ theme, onToggleDark }) {
  return (
    <MenuAppBar theme={theme} onToggleDark={onToggleDark}>
      <Container>
        <Box
          sx={{
            width: '100%',
            minWidth: 0,
            overflow: 'hidden',
          }}
        >
          <Grid container spacing={3} sx={{ width: '100%', minWidth: 0 }}>
            <Grid item xs={12} sx={{ minWidth: 0, width: '100%' }}>
              <About />
            </Grid>
            <Grid item xs={12} sx={{ minWidth: 0, width: '100%' }}>
              <Achievements />
            </Grid>
            <Grid item xs={12} sx={{ minWidth: 0, width: '100%' }}>
              <Coding />
            </Grid>
            <Grid item xs={12} sx={{ minWidth: 0, width: '100%' }}>
              <History />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MenuAppBar>
  );
}

export default App;
