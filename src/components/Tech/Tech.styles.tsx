import styled from "styled-components/macro";

export const StyledUl = styled.ul`
  list-style: none;
  margin-top: 5rem;
`;

export const StyledLi = styled.li`
  margin: 1.5rem 0 1.5rem 0;
`;

export const StyledDiv = styled.div`
  display: flex;
  margin: auto;

  gap: 5rem 2rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
`;

export const StyledH4 = styled.h4`
  font-weight: 700;
`;

export const GridItem = styled.div<{ area: string }>`
  flex: 1;
`;
