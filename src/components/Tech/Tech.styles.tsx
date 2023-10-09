import styled from "styled-components/macro";

export const FlexContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 10rem;
  flex-direction: column;
  max-width: 200rem;
  margin: auto;
  margin-bottom: 20rem;
  padding: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const VerticalLine = styled.hr`
  border-left: 0;
  display: none;
  @media (min-width: 50em) {
    display: block;
    border-left: 0.5px solid #000;
    align-self: stretch;
  }
`;


export const BoxHeader = styled.div`
  aspect-ratio: 1 / 1;
  background: linear-gradient(125deg, #333, #000);
  color: white;
  display: flex;
  align-items: center;
  padding: 4rem;
  border-radius: 0.2rem;
`;

export const StyledUl = styled.ul`
  list-style: none;
`;

export const StyledLi = styled.li`
  margin: 1.5rem 0 1.5rem 0;
`;

export const StyledDiv = styled.div`
  display: grid;
  flex: 1 1 auto;

  grid-template-columns: repeat(2, 1fr);
  gap: 5rem 2rem;
  width: 100%;
  justify-items: start;

  @media (min-width: 768px) {
    justify-items: center;
  }

  @media (min-width: 80em) {
    width: auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 10rem;
    max-width: 200rem;
  }

  text-align: center;
  
`;

export const StyledH4 = styled.h4`
  font-weight: 700;
`;
