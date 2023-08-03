import { Carousel } from "../Carousel/Carousel";
import { StyledH4, StyledSecondaryText } from "../TextItem/TextItem.styles";
import {
  ContentContainer,
  GridContainer,
  StyledDiv,
  TitleContainer,
} from "./ProjectItem.styles";

export const ProjectItem = () => {
  return (
    <StyledDiv>
      <Carousel />
      <GridContainer>
        <TitleContainer>
          <StyledSecondaryText>01</StyledSecondaryText>
          <StyledH4>DRIVER DROWSINESS DETECTION</StyledH4>
          <StyledSecondaryText>June - August 2019</StyledSecondaryText>
        </TitleContainer>
        <ContentContainer>
          <p>
            Riot Games, the company that acts as the main distributor of the
            video game, has been in charge of managing video game, has been in
            charge of Riot Games, the company that acts as the main distributor
            of the video game, has been in charge of managing video game, has
            been in charge of
          </p>
        </ContentContainer>
      </GridContainer>
    </StyledDiv>
  );
};
