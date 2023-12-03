import { motion } from "framer-motion";
import { Grid, StyledDiv, StyledMotionH1 } from "./Hero.styles";

// const gridAnimationVariant = {
//   initial: {},
//   animate: {
//     // transition: {
//     //   staggerChildren: 0.2,
//     // },
//   },
// };
const textAnimationVariant = {
  initial: { color: "blue" },
  animate: {
    color: ["#0af", "#fff"],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};
export const Hero = () => {
  return (
    <StyledDiv>
      <Grid>
        <StyledMotionH1
          variants={textAnimationVariant}
          initial="initial"
          animate="animate"
        >
          M
        </StyledMotionH1>
        <StyledMotionH1
          variants={textAnimationVariant}
          initial="initial"
          animate="animate"
        >
          O
        </StyledMotionH1>
        <StyledMotionH1
          variants={textAnimationVariant}
          initial="initial"
          animate="animate"
        >
          O
        </StyledMotionH1>
        <StyledMotionH1
          variants={textAnimationVariant}
          initial="initial"
          animate="animate"
        >
          N
        </StyledMotionH1>
      </Grid>
    </StyledDiv>
  );
};
