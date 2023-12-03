import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { ColorTokens } from "../../colors/ColorTokens";

export const StyledDiv = styled.div`
  position: relative;
  background: #040823;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const Grid = styled(motion.div)`
  display: grid;
  height: 100vh;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
`;

export const StyledMotionH1 = styled(motion.h1)`
  font-size: 25vw;
  color: ${ColorTokens.light.background};
  text-align: center;
  transform: scale(1, 2);
  font-weight: bold;
`;
