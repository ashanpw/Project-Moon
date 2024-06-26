import useEmblaCarousel from "embla-carousel-react";
import {
    EmblaContainer,
    EmblaDiv,
    EmblaSlide,
    EmblaViewport,
} from "./Carousel.styles";

import "./Carousel.scss";
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
        <div className="project-item-container">
            <div ref={emblaRef} className="embla-viewport">
                <div
                    className={
                        props.isMobile
                            ? "embla-container-mobile"
                            : "embla-container-desktop"
                    }
                >
                    <EmblaSlide key={1}>
                        <video
                            src="https://ashanpw-asset-bucket.s3.amazonaws.com/ProjectWindOpening.mp4"
                            width="100%"
                            height="100%"
                            autoPlay={true}
                            controls={false}
                            loop={true}
                            muted={true}
                        />
                    </EmblaSlide>
                    <EmblaSlide key={2}>Slide 2</EmblaSlide>
                    <EmblaSlide key={3}>Slide 3</EmblaSlide>
                </div>
            </div>
            <Dots
                selectedIdx={selectedIdx}
                size={3}
                onClickFn={scrollToSlide}
            />
        </div>
    );
};
