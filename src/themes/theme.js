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

// Function to apply transparency to a color (color must be in hex)
const addTransparency = (hexColor, alpha) => {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Apply transparency to some of the colors
const transparentColors = {
  transparentLight: addTransparency(colors.whiteSilver, 0.1), // Light background transparency for dark mode
  transparentDark: addTransparency(colors.black, 0.3),       // Dark background transparency for light mode
  transparentHoverLight: addTransparency(colors.whiteSilver, 0.2), // Hover transparency for dark mode
  transparentHoverDark: addTransparency(colors.black, 0.2),  // Hover transparency for light mode
  transparentSelectedLight: addTransparency(colors.whiteSilver, 0.3), // Selected transparency for dark mode
  transparentSelectedDark: addTransparency(colors.black, 0.2), // Selected transparency for light mode
};

// Create theme based on the mode (dark or light)
const createAppTheme = (isDarkMode) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: colors.redDark,
        contrastText: colors.whiteSilver,
      },
      secondary: {
        main: colors.gold,
        contrastText: colors.black,
      },
      error: {
        main: colors.redMedium,
        contrastText: colors.whiteSilver,
      },
      warning: {
        main: colors.gold,
        contrastText: colors.black,
      },
      info: {
        main: colors.blueMedium,
        contrastText: colors.whiteSilver,
      },
      success: {
        main: colors.greenMedium,
        contrastText: colors.whiteSilver,
      },
      background: {
        default: isDarkMode ? colors.black : colors.whiteSilver,
      },
      text: {
        primary: isDarkMode ? colors.whiteSilver : colors.black,
        secondary: isDarkMode ? colors.whiteSilver : colors.black,
        disabled: isDarkMode ? transparentColors.transparentLight : transparentColors.transparentDark,
      },
      divider: isDarkMode ? colors.whiteSilver : colors.black,
      action: {
        active: isDarkMode ? colors.whiteSilver : colors.black,
        hover: isDarkMode ? transparentColors.transparentHoverLight : transparentColors.transparentHoverDark,
        selected: isDarkMode ? transparentColors.transparentSelectedLight : transparentColors.transparentSelectedDark,
        disabled: isDarkMode ? transparentColors.transparentLight : transparentColors.transparentDark,
        disabledBackground: isDarkMode ? transparentColors.transparentLight : transparentColors.transparentDark,
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
      },
      h2: {
        fontWeight: 700,
        fontSize: '2rem',
      },
      h3: {
        fontWeight: 500,
        fontSize: '1.75rem',
      },
      h3700: {
        fontWeight: 700,
        fontSize: '1.75rem',
      },
      body1: {
        fontWeight: 400,
        fontSize: '1rem',
      },
      body2: {
        fontWeight: 400,
        fontSize: '0.875rem',
      },
    },
    components: {
      // Navbar (AppBar)
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: colors.redDark,
          },
        },
      },
    },
  });
};

export { createAppTheme, colors };
