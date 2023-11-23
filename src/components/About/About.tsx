import { motion, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { Card, CardContainer, ParagraphContainer, StyledDiv, StyledP } from "./About.styles";
import { useRef } from "react";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);



  return (
    <StyledDiv>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <ParagraphContainer>
        <StyledP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          ipsum optio asperiores nam molestiae illum consectetur nesciunt, commodi
          laborum labore quas, aut expedita fuga minima quidem ratione officia
          tempora voluptatem!
        </StyledP>
      </ParagraphContainer>

    </StyledDiv>
  );
};
