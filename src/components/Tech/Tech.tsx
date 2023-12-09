import { TextData } from "../../text/TextData";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { GridItem, StyledDiv, StyledLi, StyledUl } from "./Tech.styles";
import "./Tech.scss";
export const Tech = () => {
  const gridAreas = ["frontend", "backend", "cloud", "mlai"];
  const techItemList = TextData.tech.map((t, idx) => {
    return (
      <>
        <GridItem area={gridAreas[idx]}>
          <strong className="font-light-tertiary">{t.title}</strong>
          <StyledUl>
            {t.technologies.map((i) => {
              return <StyledLi>{i}</StyledLi>;
            })}
          </StyledUl>
        </GridItem>
        {idx !== TextData.tech.length - 1 && (
          <div className="tech-vertical-line" />
        )}
      </>
    );
  });

  return (
    <>
      <SectionTitle>TECHNOLOGIES</SectionTitle>
      <StyledDiv>{techItemList}</StyledDiv>
    </>
  );
};
