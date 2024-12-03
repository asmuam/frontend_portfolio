import React from 'react';
import { Box, Typography } from '@mui/material';

const Portfolio = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h6" paragraph>
        I am a web developer with experience in building modern and responsive websites.
      </Typography>
    </Box>
  );
};

export default Portfolio;
