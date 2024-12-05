import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { Construction, School } from '@mui/icons-material';

const HomeWIP = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute', // Menggunakan posisi absolut
        top: '50%', // Posisikan vertikal di tengah
        left: '50%', // Posisikan horizontal di tengah
        transform: 'translate(-50%, -50%)', // Menyeimbangkan posisi tengah
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        maxWidth: 600, // Maksimal lebar kotak
        boxShadow: 2,
        // Border loreng kuning-hitam di sekitar kotak
        backgroundImage:
          'repeating-linear-gradient(45deg, #C7C710 0%, #C7C710 25%, #101010 25%, #101010 50%)',
        border: '10px solid transparent',
        backgroundSize: '20px 20px', // Ukuran strip loreng
        backgroundPosition: '0 0, 10px 10px', // Posisi strip loreng
        borderRadius: '8px',
      }}
    >
      {/* Box untuk memastikan teks berada dalam area yang jelas */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main, // Latar belakang transparan agar teks terbaca
          padding: 4,
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
          <span role="img" aria-label="warning">⚠️</span>{' '}
          Baru Skripsian!
        </Typography>

        {/* Message */}
        <Typography
          variant="h2"
          sx={{
            marginBottom: 3,
            fontStyle: 'italic',
            color: theme.palette.text.secondary,
          }}
        >
          Sementara Belum Ada Ya... kkk. 🚧
        </Typography>

        {/* Icon and Descriptive Text */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Construction
            sx={{ fontSize: 50, color: theme.palette.warning.main, marginBottom: 1 }}
          />
          <Typography
            variant="h2"
            sx={{
              marginBottom: 3,
              fontSize: 18,
              color: theme.palette.text.secondary,
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
              fontSize: 16,
              boxShadow: 2, // Adding a subtle shadow to the button for emphasis
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
