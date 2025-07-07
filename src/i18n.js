import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import ltTranslation from './locales/lt/translation.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    lt: {
        translation: ltTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'lt', // Default language (Lithuanian)
        fallbackLng: 'en', // Fallback to English
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;