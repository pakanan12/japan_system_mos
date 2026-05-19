import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import thTranslation from './locales/th.json';
import jaTranslation from './locales/ja.json';

const resources = {
  en: {
    translation: enTranslation
  },
  th: {
    translation: thTranslation
  },
  ja: {
    translation: jaTranslation
  }
};
+
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
