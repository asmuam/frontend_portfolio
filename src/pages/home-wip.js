import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { Construction, School } from '@mui/icons-material';

const HomeWIP = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'repeating-linear-gradient(45deg, #ffcc00 0, #ffcc00 10px, #000 10px, #000 20px)', // yellow-black stripes
        textAlign: 'center',
        padding: 2,
      }}
    >
      {/* Content Box to Make Text Readable */}
      <Box 
        sx={{
          backgroundColor: theme.palette.primary.main, // semi-transparent white for better readability
          borderRadius: '8px', // rounded corners for a modern look
          padding: 3,
          maxWidth: '600px',
          width: '100%',
          boxShadow: 3, // add some shadow for separation
        }}
      >
        {/* Header */}
        <Typography 
          variant="h4" 
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            color: theme.palette.secondary.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <School sx={{ marginRight: 1 }} />
          <span role="img" aria-label="warning">⚠️</span> Baru Skripsian!
        </Typography>
        
        {/* Message */}
        <Typography 
          variant="h6" 
          sx={{
            marginBottom: 3,
            fontStyle: 'italic',
            color: theme.palette.text.secondary
          }}
        >
          Sementara Belum Ada Ya... kkk. 🚧
        </Typography>

        {/* Icon and Descriptive Text */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Construction sx={{ fontSize: 50, color: theme.palette.warning.main, marginBottom: 1 }} />
          <Typography 
            variant="body1" 
            sx={{
              marginBottom: 3,
              fontSize: 18,
              color: theme.palette.text.secondary
            }}
          >
            Lagi sibuk ngurusin Skripsian! 📚💻
          </Typography>

          {/* Button for Light Humor */}
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => alert('Maaf, skripsian lagi berat! 😅')}
            sx={{
              padding: '10px 20px',
              fontSize: 16
            }}
          >
            Coba Cek Lagi Kapan-Kapan
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeWIP;
