import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const CardContainer = styled.div`
  position: relative;
  height: 67.5rem;
  width: 100%;
`;

export const StyledDiv = styled.div`
  align: center;
  margin-bottom: 20rem;
`;

export const Card = styled(motion.div)<{ left: string }>`
  width: 20rem;
  height: 36.25rem;
  background: black;
  border-radius: 3.2rem;
  border: 1rem solid #2b2b2b;
  position: absolute;
  left: ${(props: { left: string }) => props.left};
  top: 10rem;
  transform-origin: bottom center;

  @media (min-width: 25em) {
    width: 40rem;
    height: 72.5rem;
    border-radius: 6.4rem;
  }
`;

export const StyledP = styled.p`
  max-width: 60rem;
  text-align: center;
`;
