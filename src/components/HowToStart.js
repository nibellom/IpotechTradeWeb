import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation
import WebApp from './BackBot';

const HowToStart = () => {
  const { t } = useTranslation(); // Используем хук для перевода

  return (
    <Card id="how-to-start" sx={{ maxWidth: 600, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          {t('how_to_start_title')} {/* Заголовок */}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          <p>
            {t('how_to_start_text_1')}{' '}
            <a href="https://www.bybit.com/invite?ref=ENJP3D" target="_blank" rel="noopener noreferrer">
              {t('how_to_start_bybit_link')}
            </a>
          </p>

          <p>{t('how_to_start_text_2')}</p>
          <div style={{ marginBottom: '20px' }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/-60n-SFVJuM"
              title={t('how_to_start_video_1_title')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p>{t('how_to_start_text_3')}</p>

          <p>{t('how_to_start_text_4')}</p>
          <div style={{ marginBottom: '20px' }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/qRJkVmG_lHA"
              title={t('how_to_start_video_2_title')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p>{t('how_to_start_text_5')}</p>

          <p>
            {t('how_to_start_text_6')}{' '}
            <WebApp />
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HowToStart;
