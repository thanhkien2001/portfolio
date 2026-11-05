import React, {createContext, useState} from "react";
import translations from "../data/translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("language") || "vi"; // Default to Vietnamese for the user!
  });

  const toggleLanguage = () => {
    const nextLang = lang === "vi" ? "en" : "vi";
    setLang(nextLang);
    localStorage.setItem("language", nextLang);
  };

  const changeLanguage = newLang => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = translations[lang] || translations.vi;

  return (
    <LanguageContext.Provider value={{lang, toggleLanguage, changeLanguage, t}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

