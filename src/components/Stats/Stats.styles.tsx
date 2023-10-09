import styled from "styled-components/macro";
import { ColorTokens } from "../../colors/ColorTokens";

export const TwoColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto;
  margin: auto;
  margin-top: -50rem;
  max-width: 200rem;
  padding: 5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 5rem;
    gap: 10rem 20rem;
  }
`;

export const StyledHeader = styled.h2`
  white-space: nowrap;
  font-size: 19rem;
  color: ${ColorTokens.light.secondary};
  @media (min-width: 481px) {
    font-size: 22rem;
  }
  
  @media (min-width: 600px) {
    font-size: 25rem;
  }

  @media (min-width: 768px) {
    font-size: 28rem;
  }
  
`;

export const H1Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 3rem 3rem;
  margin-bottom: 2rem;
  margin-top: 45rem;
  @media (min-width: 768px) {
    margin-top: 40rem;
  }
  @media (min-width: 1280px) {
    margin-top: 30rem;
  }
  
  
`;


