import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Community = () => {
  return (
    <Card id="community" sx={{ maxWidth: 600, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" align="left">
          Комьюнити
        </Typography>
        <Typography variant="body2" color="text.secondary" align="left">
          <p>Чтобы оперативно получать все новости подпишитесь на наш канал в телеграм - <a href='https://t.me/IpotechTrade' target='_blanck'>@IpotechTrade</a></p>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Community;
