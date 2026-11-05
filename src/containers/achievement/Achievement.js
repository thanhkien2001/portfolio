import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {LanguageContext} from "../../contexts/LanguageContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  const {t} = useContext(LanguageContext);
  const currentAchievement = t?.achievementSection || achievementSection;

  if (!achievementSection.display) {
    return null;
  }

  const cards =
    currentAchievement.cards || currentAchievement.achievementsCards || [];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {currentAchievement.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {currentAchievement.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {cards.map((card, i) => {
              const footer =
                card.footerLink ||
                (card.tagText
                  ? [{name: card.tagText, url: card.tagUrl || ""}]
                  : []);
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: footer
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
