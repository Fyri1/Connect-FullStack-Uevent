import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import header_en from './en/header.json';
import header_ru from './ru/header.json';
import header_ua from './ua/header.json';

import eventPage_en from './en/eventPage.json';
import eventPage_ru from './ru/eventPage.json';
import eventPage_ua from './ua/eventPage.json';

import profile_en from './en/profile.json';
import profile_ru from './ru/profile.json';
import profile_ua from './ua/profile.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
      en: {
        header: header_en,
        profile: profile_en,
        eventPage: eventPage_en,
      },
      ru: {
        header: header_ru,
        profile: profile_ru,
        eventPage: eventPage_ru,
      },
      ua: {
        header: header_ua,
        profile: profile_ua,
        eventPage: eventPage_ua,
      },
  }});

export default i18n;
