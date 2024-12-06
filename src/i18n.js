import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import axios from 'axios';
import en from './locales/en.json';
import ru from './locales/ru.json';

const getUserIdFromTelegram = () => {
  try {
    const tg = window.Telegram.WebApp;
    return tg?.initDataUnsafe?.user?.id || null; // Вернуть userId или null, если его нет
  } catch (error) {
    console.error('Ошибка при получении userId из Telegram WebApp:', error);
    return null; // Вернуть null при ошибке
  }
};

// Функция для получения языка от сервера
const fetchLanguageFromServer = async (userId) => {
  try {
    // const userId = 592196999; // Замените на реальный идентификатор пользователя
    const response = await axios.get(
      `https://ipotechserver-nibellom.amvera.io/user/${userId}/language` // Замените на ваш реальный адрес сервера
    );
    return response.data.language || 'ru'; // Возвращаем язык или 'ru' по умолчанию
  } catch (error) {
    console.error('Ошибка при получении языка от сервера:', error);
    return null; // Если произошла ошибка, возвращаем null
  }
};

const initializeI18n = async () => {
  // Пытаемся получить язык от сервера
  const userId = 592196999//getUserIdFromTelegram(); // Получаем userId из Telegram
  let serverLanguage
  if (userId) {
    serverLanguage = await fetchLanguageFromServer(userId)
  } else {
    serverLanguage = i18n.use.LanguageDetector
  }
  return serverLanguage
}

i18n
  // .use(LanguageDetector) // Определяет язык пользователя
  .use(initReactI18next)  // Интеграция с React
  .init({
    fallbackLng: await initializeI18n() || 'ru', // Язык по умолчанию
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    interpolation: {
      escapeValue: false, // Для безопасности
    },
  });


export default i18n;
