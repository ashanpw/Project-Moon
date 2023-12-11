import { TextData } from "../../text/TextData";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./Tech.scss";
export const Tech = () => {
    const gridAreas = ["frontend", "backend", "cloud", "mlai"];
    const techItemList = TextData.tech.map((t, idx) => {
        return (
            <>
                <div className="item">
                    <strong className="font-light-tertiary">{t.title}</strong>
                    <ul className="tech-ul">
                        {t.technologies.map((i) => {
                            return <li className="tech-li">{i}</li>;
                        })}
                    </ul>
                </div>
            </>
        );
    });

    return (
        <>
            <SectionTitle>TECHNOLOGIES</SectionTitle>
            <div className="tech-container">{techItemList}</div>
        </>
    );
};
