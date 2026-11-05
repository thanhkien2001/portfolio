import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";

export default function Education() {
  const {t} = useContext(LanguageContext);

  const currentEducation = t?.educationInfo || educationInfo;

  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">
          {currentEducation.title || "Education"}
        </h1>
        <div className="education-card-container">
          {currentEducation.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
