import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  bigProjects,
  educationInfo
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {t} = useContext(LanguageContext);

  const viewSkills = skillsSection.display;
  const viewEducation = educationInfo.display;
  const viewExperience = workExperiences.display;
  const viewProjects = bigProjects.display;
  const viewOpenSource = openSource.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const closeMenu = () => {
    const btn = document.getElementById("menu-btn");
    if (btn) btn.checked = false;
  };

  const nav = t?.nav || {
    skills: "Skills",
    education: "Education",
    experience: "Work Experiences",
    projects: "Projects",
    achievements: "Achievements",
    resume: "Resume",
    contact: "Contact Me"
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={closeMenu}>
                {nav.skills}
              </a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" onClick={closeMenu}>
                {nav.education}
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={closeMenu}>
                {nav.experience}
              </a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects" onClick={closeMenu}>
                {nav.projects}
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" onClick={closeMenu}>
                {nav.openSource || "Open Source"}
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" onClick={closeMenu}>
                {nav.achievements}
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={closeMenu}>
                {nav.blogs || "Blogs"}
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={closeMenu}>
                {nav.talks || "Talks"}
              </a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume" onClick={closeMenu}>
                {nav.resume}
              </a>
            </li>
          )}
          <li>
            <a href="#contact" onClick={closeMenu}>
              {nav.contact}
            </a>
          </li>
          <li className="controls-nav-item">
            <div className="header-switches-div">
              <LanguageSwitch />
              <ToggleSwitch />
            </div>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
