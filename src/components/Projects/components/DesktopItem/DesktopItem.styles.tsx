import styled from "styled-components/macro";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentContainer = styled.div``;

export const GridContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-rows: 1fr 1fr;
  max-width: 165rem;
  margin: auto;
  text-align: left;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
    gap: 30rem;
    margin: auto;
  }
`;

export const StyledDiv = styled.div`
  max-width: 200rem;
  margin: auto;
  padding-bottom: 15rem;
`;
