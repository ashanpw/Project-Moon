import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { ColorTokens } from "../../colors/ColorTokens";

export const StyledDiv = styled.div`
  position: relative;
  background: ${ColorTokens.dark.background};

    height: 100vh;
    width: 100vw;
    max-width: 100%;
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
