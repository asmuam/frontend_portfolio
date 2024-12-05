import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        paddingY: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // Ensure footer stays at the bottom without being sticky
      }}
    >
      <Container>
        <Typography
          align="center"
          variant="body2"
          color="white"
        >
          &copy; 2024 asmuammal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
