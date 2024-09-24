import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Advantages = () => {
  return (
    <Card id="advantages" sx={{ maxWidth: 600, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          Преимущества
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
            <br />
          <b>Безопасность</b>
          <br />
          <p>Вы даете доступ только на спотовую торговлю. Соответственно, даже если кто-то
            взломает нашу базу данных и расшифрует ключи API (что крайне маловероятно), он 
            все равно не сможет снять средства с вашего счета.
          </p>
          <p>Разрешенный список IP не позволит получить доступ к вашему счету со стороннего сервера.
            Это дополнительная мера защиты от злоумышленников.
          </p>
          <br />
          <b>Высокий доход</b>
          <p>Вы получаете доходность в районе 50-60% годовых в валюте, что сильно превышает 
            доход по банковским депазитам.
          </p>
          <br />
          <b>Простота использования</b>
          <p>Все взаимодействие с роботом идет через телеграм бота, вам нет необходимости 
            устанавдивать дополнительные программы.
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Advantages;
