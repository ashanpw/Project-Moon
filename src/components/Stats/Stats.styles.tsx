import styled from "styled-components/macro";
import { ColorTokens } from "../../colors/ColorTokens";

export const TwoColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto;
  margin: auto;
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
    font-size: 40rem;
  }
  
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 6rem 4rem;
  margin-bottom: 2rem;
`;

export const StyledImg = styled.img`
  border-radius: 1rem;
  max-height: 112.5rem;
  object-fit: cover;
  object-position: top;
`;

export const StyledH3 = styled.h3`
  font-weight: 600;
  font-size: 8rem;
  margin-bottom: 7.5rem;
`;