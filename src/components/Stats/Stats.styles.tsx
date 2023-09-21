import styled from "styled-components/macro";

export const TwoColumn = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: auto;
  margin: auto;
  max-width: 160rem;
  padding: 5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 5rem;
    gap: 15rem;
  }
`;

export const StyledH1 = styled.h2`
  white-space: nowrap;
`;

export const H1Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 3rem 2rem;
  margin-bottom: 2rem;
`;
