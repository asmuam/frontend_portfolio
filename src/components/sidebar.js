import React from 'react';
import { Drawer, Box, Button, IconButton, Typography, Divider } from '@mui/material';
import { Brightness7, Brightness4, Close as CloseIcon } from '@mui/icons-material';
import logo from '../assets/logo.svg';
import PropTypes from 'prop-types';

const Sidebar = ({ open, toggleDrawer, toggleDarkMode, isDarkMode }) => {
  return (
    <Drawer open={open} onClose={toggleDrawer} anchor="right"> {/* Drawer anchored to the right */}
      <Box
        sx={{
          width: 250, // Sidebar width, adjust as needed
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Align everything to the left
          padding: 2,
          position: 'relative', // For absolute positioning of the close button
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: 'absolute', top: 10, right: 10 }} // Positioning the close button at top-right
        >
          <CloseIcon />
        </IconButton>

        {/* Logo and Typography in one row (flex display) */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, width: '100%' }}>
          <img src={logo} alt="Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
          <Typography variant="h6" color="inherit">
            asmuammal
          </Typography>
        </Box>

        <Divider sx={{ width: '100%', marginBottom: 2 }} />

        {/* Menu items aligned to the left */}
        <Button
          className="sidebar-button"
          href="/"
          fullWidth
          sx={{ marginBottom: 2, textAlign: 'left', justifyContent: 'flex-start' }} // Align text to the left
        >
          Home
        </Button>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Sidebar;
