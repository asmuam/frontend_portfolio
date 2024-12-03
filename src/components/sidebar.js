import React from 'react';
import { Drawer, Box, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Ikon untuk Close (X)
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';  // Mengimpor logo

const Sidebar = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Box 
        sx={{ 
          width: 250, 
          paddingTop: '20px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', // Align logo and text to the left
          paddingLeft: '16px' // Optional: add padding to the left to align with buttons
        }} 
        role="presentation" 
        onClick={toggleDrawer}
      >
        {/* Logo and Typography on the same line */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '8px' }} />
          <Typography variant="h6">asmuammal</Typography>
        </Box>
        
        {/* Navigation buttons */}
        <Button fullWidth onClick={() => { window.location.href = '/' }}>
          Home
        </Button>
        {/* <Button fullWidth onClick={() => { window.location.href = '/contact' }}>
          Contact
        </Button> */}
      </Box>
    </Drawer>
  );
};

// Add PropTypes validation for 'open' and 'toggleDrawer'
Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Sidebar;
