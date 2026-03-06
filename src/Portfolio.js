import React from 'react';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Portfolio() {
    const [theme, setTheme] = React.useState({
        palette: {
            mode: 'dark',
        },
    });

    const toggleDarkTheme = () => {
        const newMode = theme.palette.mode === 'light' ? 'dark' : 'light';
        setTheme({
            palette: {
                mode: newMode,
            },
        });
    };

    const muiTheme = createTheme(theme);

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <App theme={theme} onToggleDark={toggleDarkTheme} />
        </ThemeProvider>
    );
}

export default Portfolio;
