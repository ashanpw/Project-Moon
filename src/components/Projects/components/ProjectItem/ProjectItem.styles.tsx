import styled from "styled-components/macro";
import { ColorTokens } from "../../../../colors/ColorTokens";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentContainer = styled.div``;

export const GridContainer = styled.div`
  display: grid;

  justify-content: space-between;
  grid-template-rows: 1fr 1fr;
  max-width: 140rem;
  margin: 0 10rem 0 10rem;
  text-align: left;
  align-items: center;

  @media (min-width: 50em) {
    grid-template-columns: 1fr 1.25fr;
    margin: 0 10rem 0 10rem;
    gap: 20rem;
  }
`;

export const StyledDiv = styled.div`
  max-width: 160rem;
  margin: auto;
`;