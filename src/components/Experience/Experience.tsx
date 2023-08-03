import { ExperienceItem } from "../ExperienceItem/ExperienceItem";
import { TextItem } from "../TextItem/TextItem";
import { StyledDiv, StyledH3 } from "./Experience.styles";

export const Experience = () => {
  return (
    <StyledDiv>
      <StyledH3>EXPERIENCE</StyledH3>
      <ExperienceItem />
    </StyledDiv>
  );
};
