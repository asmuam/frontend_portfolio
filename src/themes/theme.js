// src/themes/theme.js
import { createTheme } from '@mui/material';

// Define the color palette
const colors = {
  redDark: '#C71010',
  redMedium: '#C74A6D',
  greenDark: '#10C710',
  greenMedium: '#21C76D',
  greenLight: '#4AC74A',
  blueDark: '#1010C7',
  blueMedium: '#106DC7',
  blueLight: '#21C7C7',
  purple: '#6D4AC7',
  black: '#101010',
  whiteSilver: '#C7C7C7',
  gold: '#C7C710',
};

// Create theme based on the mode (dark or light)
const createAppTheme = (isDarkMode) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: colors.redDark,
      },
      secondary: {
        main: colors.gold,
      },
      background: {
        default: colors.whiteSilver,
        paper: colors.black,
      },
      text: {
        primary: colors.whiteSilver,
        secondary: colors.black,
      },
      action: {
        active: colors.redMedium,
        hover: colors.greenMedium,
      },
      error: {
        main: colors.redDark,
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? colors.black : colors.whiteSilver,
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: isDarkMode ? colors.black : colors.whiteSilver,
            color: isDarkMode ? colors.whiteSilver : colors.black,
          },
        },
      },
    },
  });
};

export { createAppTheme, colors };
