import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import aboutImage from '../assets/about.png'; // Импорт изображения

const AboutRobot = () => {
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
          О нас
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          <p>IPOTECH TRADE - это робот для торговли на криптобирже Bybit.</p>
          <p>Доходность порядка 50-60% годовых.</p>
          <p>Риски минимальны для данного сектора инвестиций, робот торгует без плеча и только на повышение.</p>
          <p>Стратегия основывается на статистическом анализе, в частности на "нормальном распределении".</p>
          <p>Мы работаем за комиссию от прибыли, размер комиссии 25%</p>
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          width: { xs: '100%', sm: 151 }, // На мобильных (xs) изображение будет на 100% ширины, на больших экранах (sm) фиксированная ширина
          height: 'auto',
        }}
        image={aboutImage} // Используем импортированное изображение
        alt="О нас"
      />
    </Card>
  );
};

export default AboutRobot;
