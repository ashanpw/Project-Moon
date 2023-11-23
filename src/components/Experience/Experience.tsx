import { TextData } from "../../text/TextData";
import { ExperienceItem } from "./components/ExperienceItem/ExperienceItem";
import { StyledDiv, StyledH2 } from "./Experience.styles";

export const Experience = () => {
  return (
    <StyledDiv>
      {/* <StyledH2>EXPERIENCE</StyledH2> */}
      {TextData.experience.map((e, idx) => {
        return <ExperienceItem {...e} index={idx} />
      })}
    </StyledDiv>
  );
};
