import React from 'react';
import { useTheme, Drawer, Box, Button, IconButton, Typography, Divider } from '@mui/material';
import { Brightness7, Brightness4, Close as CloseIcon } from '@mui/icons-material';
import logo from '../assets/logo.svg';
import PropTypes from 'prop-types';

const Sidebar = ({ open, toggleDrawer }) => {
  const theme = useTheme();

  return (
    <Drawer open={open} onClose={toggleDrawer} anchor="right">
      <Box
        sx={{
          width: 250, // Sidebar width, adjust as needed
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start', // Align everything to the left
          padding: 2,
          backgroundColor: theme.palette.background.default, // Background based on theme
          color: theme.palette.text.primary, // Text color based on theme
          position: 'relative', // For absolute positioning of the close button
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: theme.palette.text.primary, // Close button color based on theme
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Logo and Typography in one row (flex display) */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2, width: '100%' }}>
          <img src={logo} alt="Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
          <Typography variant="h3700" sx={{ color: theme.palette.text.primary }}>
            asmuammal
          </Typography>
        </Box>

        <Divider sx={{ width: '100%', marginBottom: 2 }} />

        {/* Menu items aligned to the left */}
        <Button
          className="sidebar-button"
          href="/"
          fullWidth
          sx={{
            marginBottom: 2,
            textAlign: 'left',
            justifyContent: 'flex-start',
            color: theme.palette.text.primary, // Text color based on theme
            fontSize: '2rem', // Set a specific font size just for this Button
            fontWeight: 'bold', // Set font weight
            textTransform: 'none', // Avoid uppercase text
            '&:hover': {
              backgroundColor: theme.palette.action.hover, // Hover effect
            },
          }}
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
};

export default Sidebar;
