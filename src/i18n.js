import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDectector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

/*import fr from './locales/fr.json';
import en from './locales/en.json';*/

i18n.use(HttpApi)
    .use(LanguageDectector)
    .use(initReactI18next)
    .init({

        /*resources: {
            fr: { translation: fr },
            en: { translation: en }
        },*/
        backend:{
            loadPath: '/locales/{{lng}}.json'
        },
        //lng: "fr",
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false
        },
        detection:{
            order:['localStorage', 'navigator']

        }
    });

export default i18n;
