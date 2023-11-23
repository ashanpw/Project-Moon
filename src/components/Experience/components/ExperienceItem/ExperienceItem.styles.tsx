import styled from "styled-components/macro";
import { ColorTokens } from "../../../../colors/ColorTokens";

export const TwoColumnWrapper = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto;
  margin: auto;
  max-width: 180rem;
  padding: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 20rem;
    padding: 10rem;
  }
`;

export const StyledImg = styled.img`
  margin-bottom: 4rem;
`;

export const StyledDiv = styled.div`
  text-align: center;
`;