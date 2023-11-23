import styled from "styled-components/macro";

export const StyledUl = styled.ul`
  list-style: none;
`;

export const StyledLi = styled.li`
  margin: 1.5rem 0 1.5rem 0;
`;

export const StyledDiv = styled.div`
  display: grid;
  margin: auto;

  grid-template-areas:
    "lunar lunar lunar lunar lunar"
    "frontend frontend . backend backend"
    "cloud cloud . mlai mlai";
    
  gap: 5rem 2rem;
  width: 100%;
  place-items: center;
  text-align: center;
  @media (min-width: 768px) {
    grid-template-areas:
      "lunar lunar lunar lunar lunar"
      "frontend backend . cloud mlai";
  }
  @media (min-width: 1200px) {
    grid-template-areas: "frontend backend lunar cloud mlai";
  }
`;

export const StyledH4 = styled.h4`
  font-weight: 700;
`;

export const GridItem = styled.div<{ area: string }>`
  grid-area: ${(props) => props.area};
`;
