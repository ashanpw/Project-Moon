import { Carousel } from "../Carousel/Carousel";
import { StyledH4 } from "../../../TextItem/TextItem.styles";
import { Paragraph } from "../../../Typography/Paragraph";
import { GridContainer, TitleContainer, ContentContainer, StyledDiv } from "./MobileItem.styles";

export const MobileItem = () => {
  return (
    <StyledDiv>
      <GridContainer>
        <Carousel isMobile />
        <div>
            <TitleContainer>
                <Paragraph>01</Paragraph>
                <StyledH4>DRIVER DROWSINESS DETECTION</StyledH4>
                <Paragraph>June - August 2019</Paragraph>
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
        </div>
      </GridContainer>
    </StyledDiv>
  );
};
