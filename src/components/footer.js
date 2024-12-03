import React from 'react'; 
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
    >
      <Container>
        <Typography variant="body2" color="white" align="center">
          &copy; 2024 asmuammal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
