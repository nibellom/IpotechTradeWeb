import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HowToStart = () => {
  return (
    <Card id="how-to-start" sx={{ maxWidth: 600, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          Как начать
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          <p>
            Сначала нужно зарегистрироваться на бирже Bybit, вот моя ссылка с дополнительными бонусами —{' '}
            <a href='https://www.bybit.com/invite?ref=ENJP3D' target='_blank' rel="noopener noreferrer">
              https://www.bybit.com/invite?ref=ENJP3D
            </a>
          </p>

          <p>
            Далее необходимо приобрести USDT, для этого на Bybit есть раздел P2P торговли. Вот видео, где я подробно рассказываю, как им пользоваться:
          </p>
          <div style={{ marginBottom: '20px' }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/-60n-SFVJuM"
              title="Как пользоваться P2P на Bybit"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p>После покупки USDT не забудь перевести их из кошелька для пополнения на единый торговый счет вашего аккаунта на Bybit.</p>

          <p>После необходимо создать API ключи, вот видео инструкция:</p>
          <div style={{ marginBottom: '20px' }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/qRJkVmG_lHA"
              title="Создание API ключей"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p>
            ❗когда будете создавать ключи, добавьте в список разрешенных IP адресов следующий адрес: 212.67.29.199
          </p>

          <p>
            После этого вам необходимо перейти в телеграм бот{' '}
            <a href='https://t.me/IpotechTradeBot' target='_blank' rel="noopener noreferrer">
              @IpotechTradeBot
            </a>, выбрать раздел «Подключить счет» и далее следовать указаниям бота. После подключения счета торговля начнется автоматически.
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HowToStart;
