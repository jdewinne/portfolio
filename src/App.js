import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
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
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
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
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Big fan of Linux, Docker, Open Source and automation. Looking every day for new frameworks, tools, etc... 
            Continuous Improvement is my life.
            Quality, Customer Intimacy, Knowledge Sharing, Openness and being Respectful to others is what I follow every day.
            
            **One sentence**: Just inject the coffee into my jugular vein!</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Contact</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Achievements</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Coding</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>History</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Behind</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
