import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

const Advantages = () => {
  const { t } = useTranslation(); // Хук для перевода

  return (
    <Card id="advantages" sx={{ maxWidth: 600, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          {t('advantages_title')} {/* Заголовок */}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          <br />
          <b>{t('advantages_safety_title')}</b>
          <br />
          <p>{t('advantages_safety_text_1')}</p>
          <p>{t('advantages_safety_text_2')}</p>
          <br />
          <b>{t('advantages_income_title')}</b>
          <p>{t('advantages_income_text')}</p>
          <br />
          <b>{t('advantages_easy_title')}</b>
          <p>{t('advantages_easy_text')}</p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Advantages;
