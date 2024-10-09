import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery'; // Для проверки размера экрана
import logo from '../assets/logo.png'; // Импортируем логотип

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false); // Состояние боковой панелиb
  const isMobile = useMediaQuery('(max-width: 600px)'); // Проверяем, если ширина экрана меньше 600px

  // Определяем функцию handleScroll с useCallback, чтобы избежать зависимости
  const handleScroll = useCallback(() => {
    // Логику скрытия применяем только для больших экранов
    if (!isMobile) {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY, isMobile]);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, isMobile]);

  const handleMouseEnter = () => {
    if (!showNavbar) {
      setShowNavbar(true);
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'О нас', link: '#about-robot' },
    { text: 'Как начать', link: '#how-to-start' },
    { text: 'Преимущества', link: '#advantages' },
    { text: 'Комьюнити', link: '#community' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#e4e2dd' }} // Цвет фона навбара как у логотипа
        className={`navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}
        onMouseEnter={handleMouseEnter}
      >
        <Toolbar>
          {/* Логотип */}
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Крипторобот" style={{ height: '50px' }} />
          </Box>

          {/* Вариант для больших экранов */}
          {!isMobile && (
            <>
              <Button color="inherit" href="#about-robot">О нас</Button>
              <Button color="inherit" href="#how-to-start">Как начать</Button>
              <Button color="inherit" href="#advantages">Преимущества</Button>
              <Button color="inherit" href="#community">Комьюнити</Button>
            </>
          )}

          {/* Вариант для мобильных устройств */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Боковая панель для мобильных устройств */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} component="a" href={item.link}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
