import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from "../public/locales/en.json";
import translationBN from "../public/locales/bn.json";
// 200 OK
// Configure i18next
i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Add language detector
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      bn: {
        translation: translationBN,
      },
    },
    // Set options for language detector
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      lookupQuerystring: "lang",
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
