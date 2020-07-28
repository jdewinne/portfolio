import React from 'react';

import About from './About';
import Achievements from './Achievements';
import Coding from './Coding';
import History from './History';
import MenuAppBar from './MenuAppBar';

import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App({theme, onToggleDark}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuAppBar theme={theme} onToggleDark={onToggleDark} />
      &nbsp;
      <Container maxWidth="lg">
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
      </Container>
    </div>
  );
}

export default App;
