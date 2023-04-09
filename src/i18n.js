import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  tr: {
    translation: {
      welcome: 'Hoşgeldin Kaptan!',
    },
  },
  en: {
    translation: {
      welcome: 'Welcome aboard Captain!',
    },
  },
};

i18n.use(initReactI18next).init({
  lng: 'tr',
  resources,
});

export default i18n;
