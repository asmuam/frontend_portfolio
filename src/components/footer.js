import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.main, // Gunakan warna utama dari theme
        paddingY: 2,
        position: 'relative',
        bottom: 0,  // Memastikan footer di bawah
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.text.primary, // Gunakan warna teks dari theme
        boxShadow: `0 -1px 4px ${theme.palette.divider}`, // Menambahkan shadow agar footer sedikit terangkat
      }}
    >
      <Typography
        align="center"
        variant="body2"
        sx={{
          color: theme.palette.text.primary,
          fontSize: '0.875rem',  // Ukuran font sedikit lebih kecil
        }}
      >
        &copy; 2024 asmuammal. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
