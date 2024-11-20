import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation
import aboutImage from '../assets/about.png'; // Импорт изображения

const AboutRobot = () => {
  const { t } = useTranslation(); // Используем хук для перевода

  return (
    <Card
      id="about-robot"
      sx={{
        maxWidth: 600,
        margin: '20px auto',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // На мобильных (xs) — колонка, на больших экранах (sm и выше) — строка
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" component="div" align="left">
          {t('about_title')} {/* Заменяем текст на ключ из локализации */}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          <p>{t('about_text_1')}</p>
          <p>{t('about_text_2')}</p>
          <p>{t('about_text_3')}</p>
          <p>{t('about_text_4')}</p>
          <p>{t('about_text_5')}</p>
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', sm: 151 }, // На мобильных (xs) изображение будет на 100% ширины, на больших экранах (sm) фиксированная ширина
          height: 'auto',
        }}
        image={aboutImage} // Используем импортированное изображение
        alt={t('about_image_alt')} 
      />
    </Card>
  );
};

export default AboutRobot;
