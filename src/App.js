import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Drawer, CssBaseline, Container, Box } from '@mui/material';
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import Sidebar from './components/sidebar.js';  // Import komponen Drawer terpisah
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import './styles/app.scss';

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Router>
      <div className="main-content">
        <CssBaseline />
        <Navbar toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
        
        {/* Komponen Drawer */}
        <Sidebar open={drawerOpen} toggleDrawer={toggleDrawer} />

        <Container>
          <Box component="main" sx={{ mt: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </Box>
        </Container>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
