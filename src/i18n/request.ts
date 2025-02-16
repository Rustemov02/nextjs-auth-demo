import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "az",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      az: { translation: require("../messages/az.json") },
      en: { translation: require("../messages/en.json") },
      ru: { translation: require("../messages/ru.json") },
    },
  });


  export default i18n;