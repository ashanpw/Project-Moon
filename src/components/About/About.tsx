import { useScroll, useTransform, useViewportScroll } from "framer-motion";
import { Card, CardContainer, StyledDiv, StyledP } from "./About.styles";
import { useRef } from "react";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  // 0 means that when the viewport of the page crosses 65% of the height from
  // the bottom of the card, start the animation
  // 2 means 100% past the bottom of the card (1), stop the animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0.7", "2 1"],
  });

  // This is a mapping of what % of the component is visible to a user defined range
  // Setting 0 to -15 as the angle of the card as it scrolls down
  const rotationTransformLeftCard = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -15]
  );

  const rotationTransformRightCard = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 15]
  );

  const yTranslateTransformCenterCard = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -25]
  );

  const yTranslateTransformLeftCard = useTransform(
    scrollYProgress,
    [0, 1],
    [-50, -50]
  );

  return (
    <StyledDiv>
      <CardContainer>
        <Card
          style={{
            rotate: rotationTransformLeftCard,
            translateX: `-50%`,
          }}
          left="45%"
        />
        <Card
          ref={ref}
          style={{
            translateX: "-50%",
            translateY: yTranslateTransformCenterCard,
          }}
          left="50%"
        />
        <Card
          style={{
            rotate: rotationTransformRightCard,
            translateX: "-50%",
          }}
          left="55%"
        />
      </CardContainer>
      <StyledP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        ipsum optio asperiores nam molestiae illum consectetur nesciunt, commodi
        laborum labore quas, aut expedita fuga minima quidem ratione officia
        tempora voluptatem!
      </StyledP>
    </StyledDiv>
  );
};
