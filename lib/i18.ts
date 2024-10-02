import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        siteName: "OpenWealth",
        mainNavigation: "Main Navigation",
        settings: "Settings",
        profile: "Profile",
        changeLanguage: "Change Language",
        asset: "Asset",
        price: "Price",
        change24h: "24h Change",
        holdings: "Holdings",
        value: "Value",
        portfolioSummary: "Portfolio Summary",
        totalValue: "Total Value",
        priceChange24h: "24h Price Change",
        numberOfAssets: "Number of Assets",
        dashboard: "Dashboard",
        deposit: "Deposit",
        addAsset: "Add Asset",
      },
    },
    es: {
      translation: {
        siteName: "RiquezaAbierta",
        mainNavigation: "Navegación Principal",
        settings: "Configuración",
        profile: "Perfil",
        changeLanguage: "Cambiar Idioma",
        asset: "Activo",
        price: "Precio",
        change24h: "Cambio 24h",
        holdings: "Posiciones",
        value: "Valor",
        portfolioSummary: "Resumen del Portafolio",
        totalValue: "Valor Total",
        priceChange24h: "Cambio de Precio 24h",
        numberOfAssets: "Número de Activos",
        dashboard: "Tablero",
        deposit: "Depósito",
        addAsset: "Añadir Activo",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already safes from xss
  },
});

export default i18n;
