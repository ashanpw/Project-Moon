import { ColorTokens } from "../../colors/ColorTokens";
import { Paragraph } from "../Typography/Paragraph";
import {
  StyledDiv,
  StyledH4,
  StyledParagraph,
} from "./TextItem.styles";
import { TextItemProps } from "./TextItem.types";

export const TextItem = (props: TextItemProps) => {
  const {index, company, title, summary} = props;
  return (
    <StyledDiv index={index}>
      <StyledParagraph>{`0${index + 1}`}</StyledParagraph>
      <StyledH4>{company}</StyledH4>
      <StyledParagraph color={ColorTokens.dark.secondary}>{title}</StyledParagraph>
      <Paragraph>{summary}</Paragraph>
    </StyledDiv>
  );
};
