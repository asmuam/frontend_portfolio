import React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/home.scss';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.default',
        padding: '0 16px',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'gold',  // Warna latar belakang kuning terang
          border: '2px solid gold', // Border dengan warna emas
          borderRadius: '8px',
          padding: { xs: '15px 25px', sm: '20px 30px', md: '30px 50px' }, // Responsif padding
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '650px', // Lebar maksimal
          width: '100%',
          background: 'linear-gradient(135deg, #f4f4f4, gold)', // Gradient
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'darkred',
            fontWeight: 'bold',
            marginBottom: '16px',
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.5rem' }, // Responsif ukuran font
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Shadow untuk teks
          }}
        >
          <span role="img" aria-label="warning">⚠️</span> Baru Skripsian!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'black',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, // Responsif ukuran font
            lineHeight: 1.6,
            marginBottom: '20px',
          }}
        >
          Sementara Belum Ada ya... kkk. 🚧
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;


