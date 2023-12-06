import { motion, useAnimate, useInView } from "framer-motion";
import { TextData } from "../../text/TextData";
import "./PlacesVisited.scss";
import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export const PlacesVisited = () => {
    const [highlightedItemIdx, setHighlightedItemIdx] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-30%" });
    const [currentBackgroundImg, setCurrentBackgroundImg] = useState(null);
    const [scope, animate] = useAnimate();

    // Starts a looping interval which goes through every image element and performs an animation on it
    // The hasViewedOnce variable ensures a loop isn't created everytime someone views the component
    useEffect(() => {
        let interval;
        if (!isInView) {
            setHighlightedItemIdx(0);
            if (interval) {
                window.clearInterval(interval);
            }
        } else {
            interval = setInterval(() => {
                setHighlightedItemIdx((prev) => (prev + 1) % 8);
            }, 1000);
        }
    }, [isInView]);

    useEffect(() => {
        if (highlightedItemIdx === 0) {
            animate(
                `#item${6}`,
                { y: 0 },
                { ease: "easeInOut", duration: 0.4 }
            );
        }
        if (highlightedItemIdx > 0) {
            animate(
                `#item${highlightedItemIdx - 1}`,
                { y: -50 },
                { ease: "easeInOut", duration: 0.4 }
            );
        }
        if (highlightedItemIdx > 1) {
            animate(
                `#item${highlightedItemIdx - 2}`,
                { y: 0 },
                { ease: "easeInOut", duration: 0.4 }
            );
        }
    }, [highlightedItemIdx]);

    return (
        <>
            <SectionTitle>PLACES VISITED</SectionTitle>
            <div
                className="container"
                ref={ref}
                style={{
                    backgroundImage:
                        "url(https://fastly.picsum.photos/id/424/1920/1080.jpg?hmac=JzwsjH5Hrdi5_3bo5flu2W0XaDry_ZmPotU9x0KEja4)",
                }}
            >
                <motion.div className="image-grid" ref={scope}>
                    {TextData.placesVisited.map((pl, idx) => (
                        <div className="item">
                            {idx === 0 && (
                                <p className="location-text">Mount Ranier</p>
                            )}
                            <motion.img
                                src={pl.src}
                                alt={pl.alt}
                                key={idx}
                                className="image"
                                id={`item${idx}`}
                            />
                            <p style={{ color: "white", textAlign: "center" }}>
                                O
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};
