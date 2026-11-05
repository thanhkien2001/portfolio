import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import HeroAnimation from "../../components/animatedIllustrations/HeroAnimation";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {t, lang} = useContext(LanguageContext);

  const greet = t?.greeting || greeting;

  if (!greeting.displayGreeting) {
    return null;
  }

  const resumeHref =
    lang === "vi"
      ? "/Che_Thanh_Kien_Fullstack_Developer_VN.pdf"
      : require("./resume.pdf");

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greet.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greet.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text={greet.contactBtn || "Contact me"}
                  href="#contact"
                />
                {greeting.resumeLink && (
                  <Button
                    text={greet.resumeBtn || "Download my resume"}
                    href={resumeHref}
                    download={
                      greet.resumeFileName ||
                      "Che_Thanh_Kien_Fullstack_Developer.pdf"
                    }
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <HeroAnimation isDark={isDark} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
