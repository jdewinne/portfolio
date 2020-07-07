import React from 'react';

import About from './About';
import Achievements from './Achievements';
import Coding from './Coding';
import History from './History';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';

import emoji from 'react-easy-emoji'

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

function svgEmoji (input) {
	return emoji(input, {
		baseUrl: 'https://twemoji.maxcdn.com/2/svg/',
		ext: '.svg',
    size: '',
    props: {
      style: {height: 1.5 + 'em'}
    }
	})
}


function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <Avatar alt="Joris De Winne" src="images/avatar.png" />
          <Box component="span" m={1}>
            { svgEmoji('🏳️‍🌈', "lgbtq", ) }
          </Box>
          <Box component="span" m={1}>
            { svgEmoji('✊🏽', "blm", ) }
          </Box>
          <Typography className={classes.root} align="right">
            <Link href="http://github.com/jdewinne" color="inherit" className={classes.link}>
              <GitHubIcon />
            </Link>
            <Link href="http://www.linkedin.com/in/jorisdewinne" color="inherit" className={classes.link}>
              <LinkedInIcon />
            </Link>
            <Link href="mailto:joris@dewinne.dev" color="inherit" className={classes.link}>
              <EmailIcon />
            </Link>
            <Link href="tel:+16266899527" color="inherit" className={classes.link}>
              <PhoneIcon />
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
