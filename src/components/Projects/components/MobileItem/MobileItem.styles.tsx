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
  max-width: 140rem;
  margin: 0 5rem 0 5rem;
  text-align: left;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    margin: 0 10rem 0 10rem;
    gap: 5rem;
    align-items: center;
  }
`;

export const StyledDiv = styled.div`
  max-width: 160rem;
  margin: auto;
  padding-bottom: 15rem;
`;