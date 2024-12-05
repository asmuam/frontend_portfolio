import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Box, ThemeProvider } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Sidebar from './components/sidebar.js';
import HomeWIP from './pages/home-wip.js';
import { createAppTheme } from './themes/theme.js';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Generate the theme
  const theme = createAppTheme(isDarkMode);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div 
          className={`main-content ${isDarkMode ? 'dark-mode' : ''}`} 
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // Ensure the content fills the viewport height
          }}
        >
          {/* Navbar */}
          <Navbar 
            toggleDrawer={toggleDrawer} 
            drawerOpen={drawerOpen} 
            toggleDarkMode={toggleDarkMode} 
            isDarkMode={isDarkMode} 
          />
          
          {/* Sidebar */}
          <Sidebar open={drawerOpen} toggleDrawer={toggleDrawer} />
          
          {/* Main content area */}
          <Container sx={{ flex: 1 }}> {/* Allow main content to take up remaining space */}
            <Box component="main">
              <Routes>
                <Route path="/" element={<HomeWIP />} />
              </Routes>
            </Box>
          </Container>
          
          {/* Footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
