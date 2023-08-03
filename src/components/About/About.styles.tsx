import styled from "styled-components/macro";

export const CardContainer = styled.div`
  position: relative;
  height: 67.5rem;
  width: 100%;
`;

export const StyledDiv = styled.div`
  text-align: center;
  margin-bottom: 20rem;
`;

export const Card = styled.div<{ background: string; angle: string }>`
  width: 40rem;
  height: 72.5rem;
  background: ${(props) => props.background};
  border-radius: 6.4rem;
  border: 1rem solid #2b2b2b;
  position: absolute;
  left: 50%;
  top: 5rem;
  transform-origin: bottom left;
  transform: rotate(${(props) => props.angle + "deg"}) translate(-50%, 0);
`;

export const Card2 = styled.div<{ background: string; angle: string }>`
  width: 40rem;
  height: 72.5rem;
  background: ${(props) => props.background};
  border-radius: 6.4rem;
  border: 1rem solid #2b2b2b;
  position: absolute;
  left: 55%;
  top: 10rem;
  transform-origin: bottom left;
  transform: rotate(${(props) => props.angle + "deg"}) translate(-50%, 0);
`;

export const Card3 = styled.div<{ background: string; angle: string }>`
  width: 40rem;
  height: 72.5rem;
  background: ${(props) => props.background};
  border-radius: 6.4rem;
  border: 1rem solid #2b2b2b;
  position: absolute;
  left: 45%;
  top: 10rem;
  transform-origin: bottom left;
  transform: rotate(${(props) => props.angle + "deg"}) translate(-50%, 0);
`;

export const StyledP = styled.p`
  max-width: 60rem;
  margin: auto;
`;
