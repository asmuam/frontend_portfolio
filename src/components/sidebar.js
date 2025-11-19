import React from 'react';
import {
  useTheme,
  Drawer,
  Box,
  Button,
  IconButton,
  Typography,
  Divider,
} from '@mui/material';
import {
  Brightness7,
  Brightness4,
  Close as CloseIcon,
} from '@mui/icons-material';
import logo from '../assets/logo.svg';
import PropTypes from 'prop-types';

const Sidebar = ({ open, toggleDrawer, toggleDarkMode, isDarkMode }) => {
  const theme = useTheme();

  return (
    <Drawer open={open} onClose={toggleDrawer} anchor="right">
      <Box
        sx={{
          width: 270,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          p: 3,
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          position: 'relative',
          boxShadow: 6,
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        }}
      >
        {/* Close button */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: theme.palette.text.primary,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Logo and Typography */}
        <Box
          sx={{ display: 'flex', alignItems: 'center', mb: 3, width: '100%' }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: 48, height: 48, marginRight: 12 }}
          />
          <Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
            asmuammal
          </Typography>
        </Box>

        <Divider sx={{ width: '100%', mb: 3 }} />

        {/* Menu items */}
        <Button
          className="sidebar-button"
          href="/"
          fullWidth
          sx={{
            mb: 2,
            textAlign: 'left',
            justifyContent: 'flex-start',
            color: theme.palette.text.primary,
            fontSize: '1.25rem',
            textTransform: 'none',
            borderRadius: 2,
            transition: 'background 0.2s',
            backgroundColor: theme.palette.background,
            '&:hover': {
              backgroundColor: theme.palette.action.hover, // gunakan dari theme
            },
          }}
        >
          Home
        </Button>

        <Box sx={{ flexGrow: 1 }} />

        {/* Toggle Dark Mode */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mt: 2,
          }}
        >
          <IconButton
            onClick={toggleDarkMode}
            sx={{
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: theme.palette.action.hover, // gunakan dari theme
              },
            }}
          >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
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
