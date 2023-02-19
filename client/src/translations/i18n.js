import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import header_en from './en/header.json';
import header_ru from './ru/header.json';
import header_ua from './ua/header.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
      en: {
        header: header_en
      },
      ru: {
        header: header_ru
      },
      ua: {
        header: header_ua
      },
  }});

export default i18n;
