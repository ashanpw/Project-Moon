
import { StyledDiv } from "./Projects.styles";
import { DesktopItem } from "./components/DesktopItem";
import { MobileItem } from "./components/MobileItem";

export const Projects = () => {
  return (
    <StyledDiv>
      {/* <h2>PROJECTS</h2> */}
      <DesktopItem />
      <MobileItem />
    </StyledDiv>
  );
};
