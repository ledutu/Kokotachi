import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import vi from './vi'
import en from './en'
import Config from 'react-native-config'

// const { DEFAULT_LANGUAGE } = Config;
DEFAULT_LANGUAGE = 'vi';


i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        vi: {
            translation: vi
        }
    },
    lng: DEFAULT_LANGUAGE,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
})

export default i18n