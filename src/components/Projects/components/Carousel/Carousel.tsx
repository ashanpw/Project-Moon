import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeftButton,
  ArrowRightButton,
  EmblaContainer,
  EmblaDiv,
  EmblaSlide,
  EmblaViewport,
} from "./Carousel.styles";

import { useCallback, useState } from "react";
import { Dots } from "../NavigationDots/NavigationDots";

export const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Sets the selected index
  const [selectedIdx, setSelectedIdx] = useState(0);
  emblaApi?.on("select", () => setSelectedIdx(emblaApi?.selectedScrollSnap));

  const scrollToSlide = (idx: number): void => {
    emblaApi?.scrollTo(idx);
  };

  return (
    <EmblaDiv>
      <ArrowRightButton onClick={scrollNext} size={25} />
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          <EmblaSlide>Slide 1</EmblaSlide>
          <EmblaSlide>Slide 2</EmblaSlide>
          <EmblaSlide>Slide 3</EmblaSlide>
        </EmblaContainer>
      </EmblaViewport>
      <ArrowLeftButton onClick={scrollPrev} size={25} />
      <Dots selectedIdx={selectedIdx} size={3} onClickFn={scrollToSlide} />
    </EmblaDiv>
  );
};
