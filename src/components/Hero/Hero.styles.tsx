import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { ColorTokens } from "../../colors/ColorTokens";

export const StyledDiv = styled.div`
  position: relative;
  background: ${ColorTokens.dark.background};
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;
export const AnimatedDiv = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  height: 20rem;
  background: red;
`;
