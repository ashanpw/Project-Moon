import { TextData } from "../../text/TextData";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./About.scss";

export const About = () => {
  return (
    <>
      <SectionTitle>ABOUT</SectionTitle>
      <div className="about-two-column global-margin">
        <img src="PfpBlackBGShort2.jpg" width="100%" alt="hi" />
        <div className="text-content-container">
          <h2>
            <strong>{TextData.about.name}</strong>
          </h2>
          <div className="stats-row font-light-tertiary">
            <img src="US_flag_icon.png" alt="" className="flag-icon" />
            {TextData.about.titleList.map((title) => (
              <p>{title}</p>
            ))}
          </div>
          <p>{TextData.about.description}</p>
        </div>
      </div>
    </>
  );
};
