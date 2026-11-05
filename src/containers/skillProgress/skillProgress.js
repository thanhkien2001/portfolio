import React, {useContext} from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  const {t} = useContext(LanguageContext);

  if (!techStack.viewSkillBars) {
    return null;
  }

  const currentTechStack = t?.techStack || techStack;
  const domains = currentTechStack.domains || [];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main proficiency-section" id="proficiency">
        <div className="proficiency-header">
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            {currentTechStack.title || "Proficiency"}
          </h1>
          {currentTechStack.subtitle && (
            <p
              className={
                isDark
                  ? "dark-mode subTitle proficiency-subtitle"
                  : "subTitle proficiency-subtitle"
              }
            >
              {currentTechStack.subtitle}
            </p>
          )}
        </div>

        <div className="proficiency-grid">
          {domains.map((item, i) => (
            <div
              key={i}
              className={`proficiency-card ${item.color || "indigo"} ${
                isDark
                  ? "proficiency-card-dark dark-mode"
                  : "proficiency-card-light"
              }`}
            >
              <div className="proficiency-card-top">
                <div
                  className={`domain-icon-box icon-${item.color || "indigo"}`}
                >
                  <i className={item.icon || "fas fa-code"}></i>
                </div>
                {item.level && (
                  <span
                    className={`domain-level-badge badge-${
                      item.color || "indigo"
                    }`}
                  >
                    {item.level}
                  </span>
                )}
              </div>

              <div className="proficiency-card-body">
                <h3 className={`domain-title ${isDark ? "dark-mode" : ""}`}>
                  {item.title}
                </h3>
                {item.role && (
                  <span
                    className={`domain-role role-${item.color || "indigo"}`}
                  >
                    {item.role}
                  </span>
                )}
                <p className={`domain-desc ${isDark ? "dark-mode" : ""}`}>
                  {item.desc}
                </p>
              </div>

              {item.skills && item.skills.length > 0 && (
                <div className="domain-skills-wrap">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`domain-skill-pill ${
                        isDark ? "domain-skill-pill-dark" : ""
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div
                className={`card-accent-bar bar-${item.color || "indigo"}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
