import { Carousel } from "../Carousel/Carousel";
import { StyledH4 } from "../../../TextItem/TextItem.styles";
import { Paragraph } from "../../../Typography/Paragraph";
import {
  ContentContainer,
  GridContainer,
  StyledDiv,
  TitleContainer,
} from "./DesktopItem.styles";
import { TextData } from "../../../../text/TextData";

export const DesktopItem = () => {
  return (
    <StyledDiv>
      <Carousel />
      <GridContainer>
        <TitleContainer>
          <Paragraph>01</Paragraph>
          <StyledH4>{TextData.projects.desktopItems[0].title}</StyledH4>
          <Paragraph>{TextData.projects.desktopItems[0].years}</Paragraph>
        </TitleContainer>
        <ContentContainer>
          <p>{TextData.projects.desktopItems[0].description}</p>
        </ContentContainer>
      </GridContainer>
    </StyledDiv>
  );
};
