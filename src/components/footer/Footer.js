import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {LanguageContext} from "../../contexts/LanguageContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const {t} = useContext(LanguageContext);
  const footerText = t?.footer?.madeWith || "Made with ❤️ by Chế Thanh Kiên";

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(footerText)}
        </p>
      </div>
    </Fade>
  );
}
