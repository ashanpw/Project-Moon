import { useScroll, useSpring, useTransform } from "framer-motion";
import { AnimatedDiv, StyledDiv } from "./Hero.styles";
import { useRef } from "react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["end end", "end end"],
  });
  const moveX = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const translateX = useSpring(moveX, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <StyledDiv>
      <AnimatedDiv
        animate={{
          scale: [50, 2, 2],
          translateY: [0, -1000],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
      ></AnimatedDiv>
    </StyledDiv>
  );
};
