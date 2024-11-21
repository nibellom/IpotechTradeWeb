import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

function WebApp() {
  const { t } = useTranslation(); // Хук для перевода

  useEffect(() => {
    // Инициализация Web App API
    const tg = window.Telegram.WebApp;
    
    // Настройка и отображение основной кнопки
    tg.MainButton.setText(`${t('backbot_title')}`);
    tg.MainButton.show();

    // Обработчик нажатия основной кнопки
    tg.MainButton.onClick(() => {
        const data = { parameter: 'значение' }; // Ваши данные для отправки
        tg.sendData(JSON.stringify(data));      // Отправить данные в бот
        tg.close();                             // Закрыть веб-приложение и вернуться в бот
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
      {/* <button 
        className="btn waves-effect waves-light"
        style={{ backgroundColor: '#e4e2dd', color: 'black', marginTop: '20px' }}
        onClick={handleSendData}>Вернуться в бот</button> */}
    </div>
  );
}

export default WebApp;
