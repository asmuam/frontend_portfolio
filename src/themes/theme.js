// src/themes/theme.js
import { createTheme } from '@mui/material';

// Define the color palette
// Base numbers
const A = 14;
const B = 1;
const C = 2003;

const colors = {
  red: {
    main: `rgb(${A * A + A}, ${B}, ${B})`, // rgb(210, 1, 1)
    light: `rgb(${A * A + A}, ${A * A - C / A}, ${A * A - C / A})`, // rgb(210, 53, 53)
    dark: `rgb(${C / A + B}, ${B}, ${B})`, // rgb(144, 1, 1)
  },
  green: {
    main: `rgb(${B}, ${A * A - A}, ${B})`, // rgb(1, 182, 1)
    light: `rgb(${A + A}, ${A * A - A}, ${C / A - A})`, // rgb(28, 182, 129)
    dark: `rgb(${B}, ${C / A - A}, ${B})`, // rgb(1, 129, 1)
  },
  blue: {
    main: `rgb(${B}, ${C / A - A}, ${A * A + A})`, // rgb(1, 129, 210)
    light: `rgb(${B}, ${A * A - A}, ${A * A + A})`, // rgb(1, 182, 210)
    dark: `rgb(${B}, ${A * A - C / A}, ${C / A + A + B})`, // rgb(1, 53, 158)
  },
  purple: {
    main: `rgb(${C / A - A}, ${A * A - C / A}, ${A * A - A})`, // rgb(129, 53, 182)
    light: `rgb(${A * A - A}, ${C / A - A}, ${A * A + A})`, // rgb(182, 129, 210)
    dark: `rgb(${C / A - A}, ${B}, ${A * A + A})`, // rgb(129, 1, 210)
  },
  black: {
    main: `rgb(${A + A + B}, ${A + A + B}, ${A + A + B})`, // rgb(29, 29, 29)
  },
  white: {
    main: `rgb(${A * A + A}, ${A * A + A}, ${A * A + A})`, // rgb(210, 210, 210)
  },
  gold: {
    main: `rgb(${A * A + A}, ${C / A + A + B}, ${A * A - C / A})`, // rgb(210, 158, 53)
    light: `rgb(${A * A + A + A + A + A + B + B}, ${A * A + A}, ${B})`, // rgb(254, 210, 1)
    dark: `rgb(${A * A + A}, ${C / A + B}, ${B})`, // rgb(210, 144, 1)
  },
};

// Function to apply transparency to a color (color must be in rgb)
const addTransparency = (rgbColor, alpha) => {
  const rgb = rgbColor.match(/\d+/g);
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
};

// Apply transparency to some of the colors
const transparentColors = {
  transparentLight: addTransparency(colors.white.main, 0.1), // Light background transparency for dark mode
  transparentDark: addTransparency(colors.black.main, 0.3), // Dark background transparency for light mode
  transparentHoverLight: addTransparency(colors.white.main, 0.2), // Hover transparency for dark mode
  transparentHoverDark: addTransparency(colors.black.main, 0.2), // Hover transparency for light mode
  transparentSelectedLight: addTransparency(colors.white.main, 0.3), // Selected transparency for dark mode
  transparentSelectedDark: addTransparency(colors.black.main, 0.2), // Selected transparency for light mode
};

// Create theme based on the mode (dark or light)
const createAppTheme = (isDarkMode) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: colors.red.dark, // was colors.redDark
        contrastText: colors.white.main, // was colors.whiteSilver
      },
      secondary: {
        main: colors.gold.main,
        contrastText: colors.black.main,
      },
      error: {
        main: colors.red.main, // was colors.redMedium
        contrastText: colors.white.main, // was colors.whiteSilver
      },
      warning: {
        main: colors.gold.light,
        contrastText: colors.black.main,
      },
      info: {
        main: colors.blue.main, // was colors.blueMedium
        contrastText: colors.white.main, // was colors.whiteSilver
      },
      success: {
        main: colors.green.main, // was colors.greenMedium
        contrastText: colors.white.main, // was colors.whiteSilver
      },
      background: {
        default: isDarkMode ? colors.black.main : colors.white.main,
      },
      text: {
        primary: isDarkMode ? colors.white.main : colors.black.main,
        secondary: isDarkMode ? colors.white.main : colors.black.main,
        disabled: isDarkMode
          ? transparentColors.transparentLight
          : transparentColors.transparentDark,
      },
      divider: isDarkMode ? colors.white.main : colors.black.main,
      action: {
        active: isDarkMode ? colors.white.main : colors.black.main,
        hover: isDarkMode
          ? transparentColors.transparentHoverLight
          : transparentColors.transparentHoverDark,
        selected: isDarkMode
          ? transparentColors.transparentSelectedLight
          : transparentColors.transparentSelectedDark,
        disabled: isDarkMode
          ? transparentColors.transparentLight
          : transparentColors.transparentDark,
        disabledBackground: isDarkMode
          ? transparentColors.transparentLight
          : transparentColors.transparentDark,
      },
    },
    typography: {
      fontFamily:
        "'Passion One', 'Luckiest Guy', 'Unlock', 'Roboto', sans-serif",
      h1: {
        fontWeight: 400,
        fontSize: '2.5rem',
      },
      h2: {
        fontWeight: 400,
        fontSize: '2rem',
      },
      h3: {
        fontWeight: 400,
        fontSize: '1.75rem',
      },
      h4: {
        fontWeight: 400,
        fontSize: '1.25rem',
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
            backgroundColor: colors.red.dark,
          },
        },
      },
    },
  });
};

export { createAppTheme, colors };
