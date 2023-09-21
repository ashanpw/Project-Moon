import { StyledP } from "./Paragraph.styles";
import { ParagraphProps } from "./Paragraph.types";

export const Paragraph = (props: ParagraphProps) => {
    return (
        <StyledP color={props.color}>{props.children}</StyledP>
    )
};