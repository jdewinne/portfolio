import React from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PhoneIcon from '@mui/icons-material/Phone';

function Sidebar() {
  return (
    <Box
      sx={{
        width: 56,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 1,
        borderRight: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
      }}
    >
      <Link href="http://github.com/jdewinne" color="inherit" sx={{ p: 1, display: 'inline-flex' }} aria-label="GitHub">
        <GitHubIcon />
      </Link>
      <Link href="http://www.linkedin.com/in/jorisdewinne" color="inherit" sx={{ p: 1, display: 'inline-flex' }} aria-label="LinkedIn">
        <LinkedInIcon />
      </Link>
      <Divider sx={{ width: '100%', my: 0.5 }} />
      <Link href="mailto:joris@dewinne.dev" color="inherit" sx={{ p: 1, display: 'inline-flex' }} aria-label="Email">
        <EmailIcon />
      </Link>
      <Link href="tel:+16266899527" color="inherit" sx={{ p: 1, display: 'inline-flex' }} aria-label="Phone">
        <PhoneIcon />
      </Link>
      <Divider sx={{ width: '100%', my: 0.5 }} />
      <Link href="pdf/Joris_De_Winne_Resume.pdf" color="inherit" sx={{ p: 1, display: 'inline-flex' }} download target="_self" aria-label="Resume PDF">
        <PictureAsPdfIcon />
      </Link>
    </Box>
  );
}

function MenuAppBar({ theme, onToggleDark, children }) {
  const themeIcon =
    theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, minHeight: '100vh' }}>
      <AppBar
        position="static"
        sx={{
          color: 'inherit',
          bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : undefined,
        }}
      >
        <Toolbar variant="dense">
          <Link href="https://dewinne.dev" color="inherit" sx={{ display: 'inline-flex' }}>
            <Avatar alt="Joris De Winne" src="images/avatar.png" sx={{ width: 36, height: 36 }} />
          </Link>
          <Typography sx={{ flexGrow: 1 }} align="right">
            <Tooltip title="Toggle light/dark theme">
              <IconButton
                aria-label="Toggle light/dark theme"
                edge="end"
                color="inherit"
                onClick={onToggleDark}
              >
                {themeIcon}
              </IconButton>
            </Tooltip>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flex: 1, minWidth: 0 }}>
        <Sidebar />
        <Box component="main" sx={{ flex: 1, py: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default MenuAppBar;
