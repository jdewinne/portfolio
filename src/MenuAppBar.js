import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MenuIcon from '@material-ui/icons/Menu';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PhoneIcon from '@material-ui/icons/Phone';
import SettingsIcon from '@material-ui/icons/Settings';

import emoji from 'react-easy-emoji';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    color: 'inherit',
    background: theme.palette.type === "dark" ? theme.palette.grey[800] : '',
  },
  appBarIcons: {
    padding: theme.spacing(1)
  },
  drawerPaper: {
    top: '56px',
    height: 'auto',
  }
}));

function svgEmoji(input) {
  return emoji(input, {
    baseUrl: 'https://twemoji.maxcdn.com/2/svg/',
    ext: '.svg',
    size: '',
    props: {
      style: { height: 1.5 + 'em' }
    }
  })
}

function MenuAppBar({ theme, onToggleDark }) {
  const classes = useStyles();
  const [drawerLeftOpen, setDrawerLeftOpen] = React.useState(false);
  const [drawerRightOpen, setDrawerRightOpen] = React.useState(false);

  const toggleLeftDrawer = () => {
    setDrawerLeftOpen(!drawerLeftOpen);
  };

  const toggleRightDrawer = () => {
    setDrawerRightOpen(!drawerRightOpen);
  };

  let themeButton = theme.palette.type === "light" ? <Brightness4Icon /> : <Brightness7Icon />;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleLeftDrawer}>
            <MenuIcon />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <Box component="span" m={1}>
            <Link href="https://dewinne.dev" color="inherit">
              <Avatar alt="Joris De Winne" src="images/avatar.png" />
            </Link>
          </Box>
          <Typography className={classes.root} align="right">
            <IconButton aria-label="settings" edge="end" color="inherit" onClick={toggleRightDrawer}>
              <SettingsIcon />
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerLeftOpen} onClose={toggleLeftDrawer} classes={{ paper: classes.drawerPaper, }} >
        <Link href="http://github.com/jdewinne" color="inherit" className={classes.appBarIcons}>
          <GitHubIcon />
        </Link>
        <Link href="http://www.linkedin.com/in/jorisdewinne" color="inherit" className={classes.appBarIcons}>
          <LinkedInIcon />
        </Link>
        <Divider />
        <Link href="mailto:joris@dewinne.dev" color="inherit" className={classes.appBarIcons}>
          <EmailIcon />
        </Link>
        <Link href="tel:+16266899527" color="inherit" className={classes.appBarIcons}>
          <PhoneIcon />
        </Link>
        <Divider />
        <Link href="pdf/Joris_De_Winne_Resume.pdf" color="inherit" className={classes.appBarIcons} download target="_self">
          <PictureAsPdfIcon />
        </Link>
        <Divider />
        <Box component="span" m={1}>
          <Link href="https://www.equalityfederation.org/" color="inherit">
            {svgEmoji('🏳️‍🌈', "lgbtq")}
          </Link>
        </Box>
        <Box component="span" m={1}>
          <Link href="https://blacklivesmatter.com/" color="inherit">
            {svgEmoji('✊🏽', "blm")}
          </Link>
        </Box>
        <Box component="span" m={1}>
          <Link href="https://www.syriacivildefence.org/en/" color="inherit">
            <img alt="White Helmets" src="images/WhiteHelmetsIcon.jpg" style={{ height: 1.5 + 'em' }} />
          </Link>
        </Box>
      </Drawer>
      <Drawer anchor="right" open={drawerRightOpen} onClose={toggleRightDrawer} classes={{ paper: classes.drawerPaper, }} >
        <Tooltip title="Toggle light/dark theme">
          <Link color="inherit" className={classes.appBarIcons} onClick={onToggleDark}>
            {themeButton}
          </Link>
        </Tooltip>
      </Drawer>
    </div >
  );
}

export default MenuAppBar;