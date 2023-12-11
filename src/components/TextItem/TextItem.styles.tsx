import styled from "styled-components/macro";
import { Paragraph } from "../Typography/Paragraph";
import { ColorTokens } from "../../colors/ColorTokens";

export const StyledH4 = styled.h4`
    margin-bottom: 0.5rem;
    font-weight: 700;
`;

export const StyledDiv = styled.div<{ index: number }>`
    grid-area: textcontent;
`;

export const StyledParagraph = styled.p`
    color: ${ColorTokens.dark.secondary};
    margin-bottom: 2.4rem;
`;

// TODO: delete this file after removing refs from DesktopItem.tsx
