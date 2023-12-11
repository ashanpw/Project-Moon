import { TextItem } from "../../../TextItem/TextItem";
import { ExperienceItemProps } from "./ExperienceItem.types";
import "./ExperienceItem.scss";

export const ExperienceItem = (props: ExperienceItemProps) => {
    const { company, title, summary, team, timeline, imgUrl, imgAlt, index } =
        props;
    const reverseSuffix = index % 2 === 0 ? "" : "-reverse";
    return (
        <div className={`two-column-container${reverseSuffix}`}>
            <div className={`experience-two-column${reverseSuffix}`}>
                <div className={`vertical-text-img-container${reverseSuffix}`}>
                    <p className="font-dark-tertiary">AWS APP MESH</p>
                    <p className="font-dark-tertiary">SEATTLE WA</p>
                </div>
                <img src={imgUrl} alt={imgAlt} className="experience-img" />
            </div>
            <TextItem
                index={index}
                company={company}
                title={title}
                summary={summary}
            />
        </div>
    );
};
