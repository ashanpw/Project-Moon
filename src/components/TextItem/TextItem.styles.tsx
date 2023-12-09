import styled from "styled-components/macro";
import { Paragraph } from "../Typography/Paragraph";
import { ColorTokens } from "../../colors/ColorTokens";

export const StyledH4 = styled.h4`
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const StyledDiv = styled.div<{ index: number }>`
  order: -1;
  @media (min-width: 768px) {
    order: ${(props) => (props.index % 2 === 0 ? "1" : "-1")};
  }
`;

export const StyledParagraph = styled.p`
  color: ${ColorTokens.dark.secondary};
  margin-bottom: 2.4rem;
`;
