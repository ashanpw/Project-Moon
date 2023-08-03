import styled from "styled-components/macro";

export const FlexContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 10rem;
  flex-direction: column;

  margin-bottom: 20rem;

  @media (min-width: 50em) {
    flex-direction: row;
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
  padding: 2.5rem;
  border-radius: 0.8rem;
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
  gap: 0rem;
  width: 100%;

  @media (min-width: 96em) {
    width: auto;
    grid-template-columns: repeat(4, 1fr);
    gap: 10rem;
    max-width: 120rem;
  }

  text-align: center;
  justify-items: center;
`;

export const StyledH4 = styled.h4`
  font-weight: 700;
`;
