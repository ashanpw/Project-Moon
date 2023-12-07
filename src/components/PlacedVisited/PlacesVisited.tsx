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
                }, 2000);
            }
            setHasViewedOnce(true);
        }
    }, [isInView]);

    const animateIn = (idx: number) => {
        // make current element shift up
        animate(
            `#grid-item-${idx}`,
            { y: -50 },
            { ease: "easeInOut", duration: 0.4 }
        );
        // Framer motion overrides transform translate so I'm centering the text before its opacity goes to 1
        animate(`#location-text-${idx}`, { x: "-50%" }, { duration: 0 });
        // animates text to show
        animate(
            `#location-text-${idx}`,
            { y: -75 },
            { ease: "easeInOut", duration: 0.5 }
        );
        animate(
            `#location-text-${idx}`,
            { opacity: 1 },
            { ease: "easeInOut", duration: 0.2, delay: 0.25 }
        );

        // animates circle icon to show and move up
        animate(
            `#circle-icon-${idx}`,
            { y: -50 },
            { ease: "easeInOut", duration: 0.5 }
        );
        animate(
            `#circle-icon-${idx}`,
            { opacity: 1 },
            { ease: "easeInOut", duration: 0.2, delay: 0.25 }
        );

        // animates background to show
        animate(
            `#background-img-${idx}`,
            { opacity: 0.5 },
            { ease: "easeInOut", duration: 0.4 }
        );
    };

    const animateOut = (idx: number) => {
        // make previous element shift down
        animate(
            `#grid-item-${idx}`,
            { y: 0 },
            { ease: "easeInOut", duration: 0.4 }
        );
        // fade out previous background image
        animate(
            `#background-img-${idx}`,
            { opacity: 0 },
            { ease: "easeInOut", duration: 0.4 }
        );
        // hide location text
        animate(
            `#location-text-${idx}`,
            { opacity: 0, y: 0 },
            { ease: "easeInOut", duration: 0.4 }
        );

        // hide circle icon
        animate(
            `#circle-icon-${idx}`,
            { y: 0, opacity: 0 },
            { ease: "easeInOut", duration: 0.4 }
        );
    };

    useEffect(() => {
        if (hasViewedOnce) {
            animateIn(imageCarouselData.currItemIdx);

            // animations to fade out the previous item
            if (imageCarouselData.prevItemIdx >= 0) {
                animateOut(imageCarouselData.prevItemIdx);
            }
        }
    }, [imageCarouselData]);

    return (
        <>
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
                        <div className="item">
                            <p
                                className="location-text"
                                id={`location-text-${idx}`}
                            >
                                Mount Ranier
                            </p>

                            <motion.img
                                src={pl.src}
                                alt={pl.alt}
                                key={`grid-item-${idx}`}
                                className="image"
                                id={`grid-item-${idx}`}
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
        </>
    );
};
