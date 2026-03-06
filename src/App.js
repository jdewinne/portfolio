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

// Shared max width so About, Achievements, Coding, and History cards stay the same width
const contentMaxWidth = '90%';

function App({ theme, onToggleDark }) {
  return (
    <MenuAppBar theme={theme} onToggleDark={onToggleDark}>
      <Container>
        <Box sx={{ maxWidth: contentMaxWidth, width: '100%', mx: 'auto' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <About />
            </Grid>
            <Grid item xs={12}>
              <Achievements />
            </Grid>
            <Grid item xs={12}>
              <Coding />
            </Grid>
            <Grid item xs={12}>
              <History />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MenuAppBar>
  );
}

export default App;
