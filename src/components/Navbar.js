import React, { useState, useEffect, useCallback } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import useMediaQuery from '@mui/material/useMediaQuery'; // Для проверки размера экрана
import logo from '../assets/logo.png'; // Импортируем логотип
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLanguageMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  const handleScroll = useCallback(() => {
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
    { text: t('about'), link: '#about-robot' },
    { text: t('how_to_start'), link: '#how-to-start' },
    { text: t('advantages'), link: '#advantages' },
    { text: t('community'), link: '#community' },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: '#e4e2dd' }}
        className={`navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}
        onMouseEnter={handleMouseEnter}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Крипторобот" style={{ height: '50px' }} />
          </Box>

          {!isMobile && (
            <>
              {menuItems.map((item, index) => (
                <Button key={index} color="inherit" href={item.link}>
                  {item.text}
                </Button>
              ))}
            </>
          )}

          <IconButton
            color="inherit"
            onClick={handleLanguageMenu}
            aria-controls={open ? 'language-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <LanguageIcon />
          </IconButton>

          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage('ru')}>Русский</MenuItem>
          </Menu>

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

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
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
