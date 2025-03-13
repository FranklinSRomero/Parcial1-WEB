import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      login: "Login",
      email: "Email",
      password: "Password"
    },
  },
  es: {
    translation: {
      login: "Inicio de Sesión",
      email: "Correo",
      password: "Contraseña"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
