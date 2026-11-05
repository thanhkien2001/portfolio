import React, {useContext} from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {LanguageContext} from "../../contexts/LanguageContext";

export default function GithubProfileCard({prof}) {
  const {isDark} = useContext(StyleContext);
  const {t} = useContext(LanguageContext);
  const contactData = t?.contact;

  const hireableStatus = isHireable
    ? contactData?.hireableText || "Open for opportunities"
    : contactData?.occupiedText || "Currently occupied";

  const locationText = contactData?.locationVal || prof.location;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">
          {contactData?.title || "Reach Out to me!"}
        </h1>
        <p
          className={
            isDark
              ? "dark-mode contact-intro-subtitle"
              : "subTitle contact-intro-subtitle"
          }
        >
          {contactData?.subtitle || contactInfo.subtitle}
        </p>

        <div
          className={`contact-card-box ${
            isDark ? "dark-mode contact-card-dark" : "contact-card-light"
          }`}
        >
          <div className="contact-card-content">
            <div className="contact-profile-header">
              <h2 className={`contact-name ${isDark ? "dark-mode" : ""}`}>
                {prof.name || "Chế Thanh Kiên"}
              </h2>
              <span
                className={`hireable-badge ${
                  isHireable ? "badge-available" : ""
                }`}
              >
                <span className="status-dot"></span>
                {hireableStatus}
              </span>
            </div>

            <p className={`contact-bio ${isDark ? "dark-mode" : ""}`}>
              {contactData?.bio || prof.bio}
            </p>

            <div className="contact-details-grid">
              {locationText && (
                <div
                  className={`contact-item ${
                    isDark ? "contact-item-dark" : ""
                  }`}
                >
                  <div className="contact-item-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">
                      {contactData?.locationLabel || "Location"}
                    </span>
                    <span className="contact-item-value">{locationText}</span>
                  </div>
                </div>
              )}

              {contactInfo.number && (
                <a
                  href={`tel:${contactInfo.number}`}
                  className={`contact-item contact-item-link ${
                    isDark ? "contact-item-dark" : ""
                  }`}
                >
                  <div className="contact-item-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">
                      {contactData?.phoneLabel || "Phone"}
                    </span>
                    <span className="contact-item-value">
                      {contactInfo.number}
                    </span>
                  </div>
                </a>
              )}

              {contactInfo.email_address && (
                <a
                  href={`mailto:${contactInfo.email_address}`}
                  className={`contact-item contact-item-link ${
                    isDark ? "contact-item-dark" : ""
                  }`}
                >
                  <div className="contact-item-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">
                      {contactData?.emailLabel || "Email"}
                    </span>
                    <span className="contact-item-value">
                      {contactInfo.email_address}
                    </span>
                  </div>
                </a>
              )}
            </div>

            <div className="contact-social-wrap">
              <span className={`social-label ${isDark ? "dark-mode" : ""}`}>
                {contactData?.socialLabel || "Connect with me:"}
              </span>
              <SocialMedia />
            </div>
          </div>

          <div className="contact-card-avatar">
            <div className="avatar-wrapper">
              <img
                src={prof.avatarUrl}
                alt={prof.name || "Chế Thanh Kiên"}
                className="profile-image-clean"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
