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

export const Carousel = (props: any) => {
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
        <EmblaContainer isMobile={props.isMobile}>
          <EmblaSlide key={1}><video src="https://ashanpw-asset-bucket.s3.amazonaws.com/ProjectWindOpening.mp4" width="100%" height="100%" autoPlay = {true}
        controls = {false}
        loop = {true}
        muted = {true}/></EmblaSlide>
          <EmblaSlide key={2}>Slide 2</EmblaSlide>
          <EmblaSlide key={3}>Slide 3</EmblaSlide>
        </EmblaContainer>
      </EmblaViewport>
      <ArrowLeftButton onClick={scrollPrev} size={25} />
      <Dots selectedIdx={selectedIdx} size={3} onClickFn={scrollToSlide} />

    </EmblaDiv>
  );
};
