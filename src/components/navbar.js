import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';  // Ikon untuk Close (X)
import PropTypes from 'prop-types';
import logo from '../assets/logo.svg';  // Mengimpor logo

const Navbar = ({ toggleDrawer, drawerOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));  // Cek apakah perangkat mobile

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo yang rata kiri */}
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '16px' }} />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          asmuammal
        </Typography>

        {/* Tombol menu untuk mobile */}
        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
            {drawerOpen ? <CloseIcon /> : <MenuIcon />} {/* Ganti icon tergantung state drawer */}
          </IconButton>
        ) : (
          <div>
            <Button color="inherit" href="/">
              Home
            </Button>
            {/* <Button color="inherit" href="/contact">
              Contact
            </Button> */}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

export default Navbar;
