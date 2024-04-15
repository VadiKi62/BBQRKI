import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "./en.json";
import translationsEl from "./el.json";
import translationsDe from "./de.json";
import translationsRu from "./ru.json";
import translationsUa from "./ua.json";
import translationsSr from "./sr.json";

i18n.use(initReactI18next).init({
  lng: "en",
  // fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: translationsEn,
    },
    el: {
      translation: translationsEl,
    },
    de: {
      translation: translationsDe,
    },
    ru: {
      translation: translationsRu,
    },
    ua: {
      translation: translationsUa,
    },
    sr: {
      translation: translationsSr,
    },
  },
});

export default i18n;
