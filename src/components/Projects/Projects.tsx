import { SectionTitle } from "../SectionTitle/SectionTitle";
import { StyledDiv } from "./Projects.styles";
import { DesktopItem } from "./components/DesktopItem";
import { MobileItem } from "./components/MobileItem";

export const Projects = () => {
  return (
    <StyledDiv>
      <SectionTitle>PROJECTS</SectionTitle>
      <DesktopItem />
      <MobileItem />
    </StyledDiv>
  );
};
