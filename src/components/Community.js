import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Импортируем хук useTranslation

const Community = () => {
  const { t } = useTranslation(); // Используем хук для перевода

  return (
    <Card id="community" sx={{ maxWidth: 600, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          {t('community_title')} {/* Заголовок */}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          <p>
            {t('community_text')}{' '}
            <a href="https://t.me/IpotechTrade" target="_blank" rel="noopener noreferrer">
              @IpotechTrade
            </a>
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Community;
