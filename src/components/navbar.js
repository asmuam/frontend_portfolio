import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import logo from '../assets/logo.svg';
import PropTypes from 'prop-types';

const Navbar = ({ toggleDrawer, drawerOpen, toggleDarkMode, isDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Detect mobile devices

  return (
    <AppBar
      component="header"
      position="sticky"
    >
      <Toolbar>
        {/* Left section: Logo */}
        <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Logo" style={{ width: 40, height: 40, marginRight: 10 }} />
          <Typography variant="h3700" sx={{ color: theme.palette.primary.contrastText }}>
            asmuammal
          </Typography>
        </div>

        {/* Center section: Empty space */}
        <div style={{ flexGrow: 1 }}></div> {/* This takes up the remaining space */}

        {/* Right section: Menu and Dark Mode toggle */}
        <div className="navbar-buttons" style={{ display: 'flex', alignItems: 'center' }}>
          {isMobile ? (
            // On mobile: Hamburger menu + Dark Mode toggle on the left
            <>
              <IconButton onClick={toggleDrawer} sx={{ color: theme.palette.primary.contrastText }}>
                {drawerOpen ? null : <MenuIcon />}
              </IconButton>
              <IconButton onClick={toggleDarkMode} sx={{ color: theme.palette.primary.contrastText }}>
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </>
          ) : (
            // On desktop: Home button + Dark Mode toggle on the right
            <>
              <Button href="/" sx={{ color: theme.palette.primary.contrastText }}>
                Home
              </Button>
              <IconButton onClick={toggleDarkMode} sx={{ color: theme.palette.primary.contrastText }}>
                {isDarkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

// Prop validation
Navbar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Navbar;
