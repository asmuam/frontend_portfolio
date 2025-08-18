import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Box, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Sidebar from './components/sidebar.js';
import HomeWIP from './pages/home-wip.js';
import { createAppTheme } from './themes/theme.js';

const App = () => {
  const savedMode = localStorage.getItem('darkMode');
  const [isDarkMode, setIsDarkMode] = useState(savedMode === 'true');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      // Simpan preferensi ke localStorage
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };
  // Generate the theme
  const theme = createAppTheme(isDarkMode);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Main content container with flexbox */}
        <div
          className={`main-content ${isDarkMode ? 'dark-mode' : ''}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // Full height of the viewport
            maxWidth: '100%',   // Prevent exceeding device width
            overflowX: 'hidden', // Prevent horizontal scroll
          }}
        >
          {/* Navbar (Header) */}
          <Navbar
            toggleDrawer={toggleDrawer}
            drawerOpen={drawerOpen}
            toggleDarkMode={toggleDarkMode}
            isDarkMode={isDarkMode}
          />

          {/* Sidebar */}
          <Sidebar
            open={drawerOpen}
            toggleDrawer={toggleDrawer}
          />
          {/* Main Content (flex-grow ensures it takes remaining space) */}
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomeWIP />} />
            </Routes>
          </Box>
          {/* Footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </Router >
  );
};

export default App;
