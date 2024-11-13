import React, { useEffect } from 'react';

function WebApp() {
  useEffect(() => {
    // Инициализация Web App API
    const tg = window.Telegram.WebApp;
    
    // Настройка и отображение основной кнопки
    tg.MainButton.setText("Отправить данные в бот");
    tg.MainButton.show();

    // Обработка нажатия на основную кнопку
    tg.MainButton.onClick(() => {
      const data = { parameter: 'Переход с webApp' }; // Параметр, который хотите передать
      tg.sendData(JSON.stringify(data)); // Отправка данных в бот
    });

    // Очистка при размонтировании компонента
    return () => {
      tg.MainButton.offClick();
      tg.MainButton.hide();
    };
  }, []);

  const handleSendData = () => {
    const tg = window.Telegram.WebApp;
    const data = { parameter: 'значение' }; // Параметр, который хотите передать
    tg.sendData(JSON.stringify(data)); // Отправка данных в бот
  };

  return (
    <div>
      <button 
        className="btn waves-effect waves-light"
        style={{ backgroundColor: '#e4e2dd', color: 'black', marginTop: '20px' }}
        onClick={handleSendData}>Вернуться в бот</button>
    </div>
  );
}

export default WebApp;
