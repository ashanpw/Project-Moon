import { Carousel } from "../Carousel/Carousel";
import { StyledH4 } from "../../../TextItem/TextItem.styles";
import { Paragraph } from "../../../Typography/Paragraph";
import {
  GridContainer,
  TitleContainer,
  ContentContainer,
  StyledDiv,
} from "./MobileItem.styles";
import { TextData } from "../../../../text/TextData";

export const MobileItem = () => {
  return (
    <StyledDiv>
      <GridContainer>
        <Carousel isMobile />
        <div>
          <TitleContainer>
            <Paragraph>02</Paragraph>
            <StyledH4>{TextData.projects.mobileItems[0].title}</StyledH4>
            <Paragraph>{TextData.projects.mobileItems[0].years}</Paragraph>
          </TitleContainer>
          <ContentContainer>
            <p>{TextData.projects.mobileItems[0].description}</p>
          </ContentContainer>
        </div>
      </GridContainer>
    </StyledDiv>
  );
};
