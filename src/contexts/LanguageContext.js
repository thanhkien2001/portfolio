import React, {createContext, useState} from "react";
import translations from "../data/translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("language") || "en"; // Default to Vietnamese for the user!
  });

  const toggleLanguage = () => {
    const nextLang = lang === "en" ? "vi" : "en";
    setLang(nextLang);
    localStorage.setItem("language", nextLang);
  };

  const changeLanguage = newLang => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{lang, toggleLanguage, changeLanguage, t}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

