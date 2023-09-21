import { ColorTokens } from "../../../../colors/ColorTokens";
import { TextItem } from "../../../TextItem/TextItem";
import { Paragraph } from "../../../Typography/Paragraph";
import { StyledDiv, StyledImg, TwoColumnWrapper } from "./ExperienceItem.styles";
import { ExperienceItemProps } from "./ExperienceItem.types";

export const ExperienceItem = (props: ExperienceItemProps) => {
  const {company, title, summary, team, timeline, imgUrl, imgAlt, index} = props;
  return (
    <TwoColumnWrapper>
      <StyledDiv>
        <StyledImg
          src={imgUrl}
          width="100%"
          alt={imgAlt}
        />
        <Paragraph>{team}</Paragraph>
        <Paragraph color={ColorTokens.dark.secondary}>{timeline}</Paragraph>
      </StyledDiv>
      <TextItem index={index} company={company} title={title} summary={summary} />
    </TwoColumnWrapper>
  );
};
