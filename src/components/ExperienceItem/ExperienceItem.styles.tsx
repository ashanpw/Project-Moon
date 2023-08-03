import styled from "styled-components/macro";
import { ColorTokens } from "../../colors/ColorTokens";

export const TwoColumnWrapper = styled.div`
  display: grid;
  gap: 10rem;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  padding-bottom: 20rem;
  max-width: 160rem;
  padding: 10rem;
`;
