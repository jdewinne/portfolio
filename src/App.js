import React from 'react';

import About from './About';
import Achievements from './Achievements';
import Coding from './Coding';
import History from './History';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    padding: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  appBar: {
    background: '#333',
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <Avatar alt="Joris De Winne" src="images/avatar.png" />
          <Typography className={classes.root} align="right">
            <Link href="http://github.com/jdewinne" color="inherit" className={classes.link}>
              <GitHubIcon />
            </Link>
            <Link href="http://www.linkedin.com/in/jorisdewinne" color="inherit" className={classes.link}>
              <LinkedInIcon />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
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
