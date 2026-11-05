import React, {useContext} from "react";
import LanguageContext from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";
import "./LanguageSwitch.scss";

export default function LanguageSwitch() {
  const {lang, changeLanguage} = useContext(LanguageContext);
  const {isDark} = useContext(StyleContext);

  return (
    <div
      className={`language-switch-btn ${isDark ? "dark-mode" : ""}`}
      title="Switch Language / Đổi ngôn ngữ"
    >
      <span
        className={`lang-option ${lang === "vi" ? "active" : ""}`}
        onClick={() => changeLanguage("vi")}
      >
        <span className="flag-icon">🇻🇳</span> VI
      </span>
      <span
        className={`lang-option ${lang === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        <span className="flag-icon">🇬🇧</span> EN
      </span>
    </div>
  );
}

