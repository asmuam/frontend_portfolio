import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const fonts = [
  { name: 'Passion One', family: "'Passion One', cursive" },
  { name: 'Luckiest Guy', family: "'Luckiest Guy', cursive" },
  { name: 'Unlock', family: "'Unlock', cursive" },
];

const paletteKeys = [
  { key: 'primary', label: 'Primary' },
  { key: 'secondary', label: 'Secondary' },
  { key: 'error', label: 'Error' },
  { key: 'warning', label: 'Warning' },
  { key: 'info', label: 'Info' },
  { key: 'success', label: 'Success' },
];

const variants = [
  { key: 'h1', label: 'H1' },
  { key: 'h2', label: 'H2' },
  { key: 'h3', label: 'H3' },
  { key: 'h4', label: 'H4' },
  { key: 'body1', label: 'Body1' },
  { key: 'body2', label: 'Body2' },
];

const sampleText = 'The quick brown fox jumps over the lazy dog.';

const FontsDemo = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Demo Kombinasi Font, Variant Typography & Warna Theme
      </Typography>
      {fonts.map((font) => (
        <Box key={font.name} sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ fontFamily: font.family, mb: 2 }}>
            {font.name}
          </Typography>
          {variants.map((variant) => (
            <Box key={variant.key} sx={{ mb: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                {variant.label}
              </Typography>
              {paletteKeys.map(({ key, label }) => (
                <Typography
                  key={key}
                  variant={variant.key}
                  sx={{
                    fontFamily: font.family,
                    color: theme.palette[key].main,
                    backgroundColor: theme.palette.background.default,
                    mb: 1,
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    boxShadow: 1,
                    display: 'inline-block',
                  }}
                >
                  {label} - {sampleText}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default FontsDemo;
