import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const CardContainer = styled.div`
  max-width: 100vw;

  display: flex;
  justify-content: center;
  margin: 2rem;
  gap: 1rem;
  @media (min-width: 1200px) {
    gap: 5rem;
  }
`;

export const StyledDiv = styled.div`
  margin-bottom: 20rem;
`;

export const Card = styled(motion.div)`
  width: 37.5rem;
  height: 70rem;
  background: black;
  margin-bottom: 3rem;
  border-radius: 7.4rem;
  border: 1rem solid #2b2b2b;

  @media (min-width: 768px) {
    width: 40rem;
    height: 71.11rem;
    border-radius: 7.4rem;
  }

  @media (min-width: 1200px) {
    width: 47.5rem;
    height: 85rem;
    border-radius: 8.4rem;
  }
`;

export const ParagraphContainer = styled.div`
  margin: auto;
  max-width: 74rem;
`;

export const StyledP = styled.p`
  text-align: center;
`;
