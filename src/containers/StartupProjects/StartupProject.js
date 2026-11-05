import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const {t} = useContext(LanguageContext);

  if (!bigProjects.display) {
    return null;
  }

  const currentBigProjects = t?.bigProjects || bigProjects;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{currentBigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {currentBigProjects.subtitle}
          </p>

          <div className="projects-container">
            {currentBigProjects.projects.map((project, i) => {
              const url = project.btnUrl || project.footerLink?.[0]?.url;
              const btnName =
                project.btnText || project.footerLink?.[0]?.name || "Visit Website";

              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "project-card project-card-dark dark-mode"
                      : "project-card project-card-light"
                  }
                >
                  <div>
                    <div className="project-card-header">
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="project-card-logo"
                        />
                      )}
                      <div className="project-card-title-group">
                        <h3
                          className={
                            isDark
                              ? "dark-mode project-title-text"
                              : "project-title-text"
                          }
                        >
                          {project.projectName}
                        </h3>
                        {project.role && (
                          <span
                            className={
                              isDark
                                ? "dark-mode project-role-text"
                                : "project-role-text"
                            }
                          >
                            {project.role}
                          </span>
                        )}
                      </div>
                    </div>

                    <p
                      className={
                        isDark ? "dark-mode project-desc" : "project-desc"
                      }
                    >
                      {project.projectDesc}
                    </p>

                    {project.techStack && (
                      <div className="project-tech-stack">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className={
                              isDark
                                ? "tech-badge tech-badge-dark"
                                : "tech-badge"
                            }
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {url && (
                    <div className="project-card-footer">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                      >
                        <span>{btnName}</span>
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
