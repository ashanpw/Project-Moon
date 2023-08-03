import styled from "styled-components/macro";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export const EmblaDiv = styled.div`
  max-width: 160rem;
  margin: auto;
  position: relative;
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
  margin: 0 10rem 0 10rem;
  border: 1rem solid #2b2b2b;
  border-radius: 3rem;

  @media (min-width: 50em) {
    border-radius: 6.4rem;
  }
`;

export const EmblaContainer = styled.div`
  display: flex;
  aspect-ratio: 16/9;
  gap: 1rem;
`;

export const EmblaSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  max-width: 100%;
  padding: 3rem;
  background-color: #ffdcc2;
`;

export const ArrowLeftButton = styled(IconArrowLeft)`
  position: absolute;
  top: 50%;
  left: 5rem;
  cursor: pointer;
`;

export const ArrowRightButton = styled(IconArrowRight)`
  position: absolute;
  top: 50%;
  right: 5rem;
  cursor: pointer;
`;
