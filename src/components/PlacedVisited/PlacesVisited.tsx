import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";
import { TextData } from "../../text/TextData";
import "./PlacesVisited.scss";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const PlacesVisited = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-30%" });
    const [imageCarouselData, setImageCarouselData] = useState({
        currItemIdx: -1,
        prevItemIdx: -1,
        currBgImage: "",
        currBgImageAlt: "",
    });
    const [hasViewedOnce, setHasViewedOnce] = useState(false);
    const [scope, animate] = useAnimate();
    // whenever someone clicks on an image in the carousel, this variable sets to true and stops the interval from animating
    const [stopAnimationOverride, setStopAnimationOverride] = useState(false);

    // Starts a looping interval which goes through every image element and performs an animation on it
    // The hasViewedOnce variable ensures a loop isn't created everytime someone views the component
    useEffect(() => {
        if (isInView) {
            if (!hasViewedOnce) {
                setInterval(() => {
                    setImageCarouselData((prev) => {
                        const newCurrItemIdx = (prev.currItemIdx + 1) % 7;
                        return {
                            currItemIdx: newCurrItemIdx,
                            prevItemIdx: prev.currItemIdx,
                            currBgImage:
                                TextData.placesVisited[newCurrItemIdx].src,
                            currBgImageAlt:
                                TextData.placesVisited[newCurrItemIdx].alt,
                        };
                    });
                }, 2500);
            }
            setHasViewedOnce(true);
        }
    }, [isInView]);

    const animateIn = (idx: number) => {
        // make current element shift up
        animate(
            `#grid-item-${idx}`,
            { y: -50 },
            { ease: "easeOut", duration: 0.5 }
        );
        // Framer motion overrides transform translate so I'm centering the text before its opacity goes to 1
        animate(`#location-text-${idx}`, { x: "-50%" }, { duration: 0 });
        // animates text to show
        animate(
            `#location-text-${idx}`,
            { y: -80 },
            { ease: "easeOut", duration: 0.6 }
        );
        animate(
            `#location-text-${idx}`,
            { opacity: 1 },
            { ease: "easeOut", duration: 0.3, delay: 0.35 }
        );

        // animates circle icon to show and move up
        animate(
            `#circle-icon-${idx}`,
            { y: -50 },
            { ease: "easeOut", duration: 0.6 }
        );
        animate(
            `#circle-icon-${idx}`,
            { opacity: 1 },
            { ease: "easeOut", duration: 0.2, delay: 0.35 }
        );

        // animates background to show
        animate(
            `#background-img-${idx}`,
            { opacity: 0.7 },
            { ease: "easeOut", duration: 0.5 }
        );
    };

    const animateOut = (idx: number) => {
        // make previous element shift down
        animate(
            `#grid-item-${idx}`,
            { y: 0 },
            { ease: "easeOut", duration: 0.5 }
        );
        // fade out previous background image
        animate(
            `#background-img-${idx}`,
            { opacity: 0 },
            { ease: "easeOut", duration: 0.5 }
        );
        // hide location text
        animate(
            `#location-text-${idx}`,
            { opacity: 0, y: 0 },
            { ease: "easeOut", duration: 0.5 }
        );

        // hide circle icon
        animate(
            `#circle-icon-${idx}`,
            { y: 0, opacity: 0 },
            { ease: "easeOut", duration: 0.5 }
        );
    };

    useEffect(() => {
        if (hasViewedOnce && !stopAnimationOverride) {
            animateIn(imageCarouselData.currItemIdx);

            // animations to fade out the previous item
            if (imageCarouselData.prevItemIdx >= 0) {
                animateOut(imageCarouselData.prevItemIdx);
            }
        }
    }, [imageCarouselData]);

    const onImageClickHandler = (idx: number) => {
        console.log("clicked!", idx, imageCarouselData.currItemIdx);

        setImageCarouselData((prev) => {
            return {
                currItemIdx: idx,
                prevItemIdx: prev.currItemIdx,
                currBgImage: TextData.placesVisited[idx].src,
                currBgImageAlt: TextData.placesVisited[idx].alt,
            };
        });
        setStopAnimationOverride(true);
        animateIn(idx);
        // Because the interval is still running and it's very wonky to clear intervals in node typescript,
        // we animate out all elements but the selected element
        for (let i = 0; i < 7; i++) {
            if (i !== idx) {
                animateOut(i);
            }
        }
    };

    return (
        <div className="global-margin">
            <SectionTitle>PLACES VISITED</SectionTitle>
            <div className="container" ref={scope}>
                {TextData.placesVisited.map((pl, idx) => (
                    <motion.img
                        className="bg-image"
                        src={pl.src}
                        alt={pl.alt}
                        id={`background-img-${idx}`}
                        key={`background-img-${idx}`}
                    />
                ))}
                <motion.div className="image-grid" ref={ref}>
                    {TextData.placesVisited.map((pl, idx) => (
                        <div className="places-visited-item">
                            <p
                                className="location-text"
                                id={`location-text-${idx}`}
                            >
                                {pl.location}
                            </p>

                            <motion.img
                                src={pl.src}
                                alt={pl.alt}
                                key={`grid-item-${idx}`}
                                className="image"
                                id={`grid-item-${idx}`}
                                onClick={() => onImageClickHandler(idx)}
                                whileHover={{ scale: 1.04 }}
                            />
                            <svg
                                width="100%"
                                height="12"
                                xmlns="http://www.w3.org/2000/svg"
                                key={idx}
                                id={`circle-icon-${idx}`}
                                className="circle-icon"
                            >
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r="5"
                                    stroke="white"
                                    fill="none"
                                />
                            </svg>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
