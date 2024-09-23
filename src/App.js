import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import AboutRobot from './components/AboutRobot';
import HowToStart from './components/HowToStart';
import Advantages from './components/Advantages';
import Community from './components/Community';
import './components/Navbar.css'; // Подключаем стили навбара

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" >
        <Navbar />
        <Box sx={{ paddingTop: '64px' }}> {/* Указываем отступ для всего содержимого */}
          <AboutRobot />
          <HowToStart />
          <Advantages />
          <Community />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
