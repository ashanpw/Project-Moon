import { TextData } from "../../text/TextData";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ExperienceItem } from "./components/ExperienceItem/ExperienceItem";
import "./Experience.scss";

export const Experience = () => {
    return (
        <div className="experience-container global-margin">
            <SectionTitle>EXPERIENCE</SectionTitle>
            {TextData.experience.map((e, idx) => {
                return <ExperienceItem {...e} index={idx} />;
            })}
        </div>
    );
};
