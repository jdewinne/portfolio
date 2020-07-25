import React from 'react';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

function Portfolio() {
    const [theme, setTheme] = React.useState({
        palette: {
            type: "dark"
        }
    });

    const toggleDarkTheme = () => {
        let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
        setTheme({
            palette: {
                type: newPaletteType
            }
        });
    };

    const muiTheme = createMuiTheme(theme);

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <App theme={theme} onToggleDark={toggleDarkTheme} />
        </ThemeProvider>
    )
}

export default Portfolio