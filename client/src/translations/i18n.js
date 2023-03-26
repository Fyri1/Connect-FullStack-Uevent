import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import header_en from './en/header.json';
import header_ru from './ru/header.json';
import header_ua from './ua/header.json';

import footer_en from './en/footer.json';
import footer_ru from './ru/footer.json';
import footer_ua from './ua/footer.json';

import auth_en from './en/auth.json';
import auth_ru from './ru/auth.json';
import auth_ua from './ua/auth.json';

import mainPage_en from './en/mainPage.json';
import mainPage_ru from './ru/mainPage.json';
import mainPage_ua from './ua/mainPage.json';

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
        footer: footer_en,
        auth: auth_en,
        mainPage: mainPage_en,
        profile: profile_en,
        eventPage: eventPage_en,
      },
      ru: {
        header: header_ru,
        footer: footer_ru,
        auth: auth_ru,
        mainPage: mainPage_ru,
        profile: profile_ru,
        eventPage: eventPage_ru,
      },
      ua: {
        header: header_ua,
        footer: footer_ua,
        auth: auth_ua,
        mainPage: mainPage_ua,
        profile: profile_ua,
        eventPage: eventPage_ua,
      },
  }});

export default i18n;
