import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n
  .use(LanguageDetector) // Определяет язык пользователя
  .use(initReactI18next)  // Интеграция с React
  .init({
    fallbackLng: 'ru', // Язык по умолчанию
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    interpolation: {
      escapeValue: false, // Для безопасности
    },
  });

export default i18n;
