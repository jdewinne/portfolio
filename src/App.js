import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Avatar</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>About</Paper>
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
