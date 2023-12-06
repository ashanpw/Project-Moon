import { useEffect } from "react";
import "./Hero.scss";
import { stagger, useAnimate } from "framer-motion";

export const Hero = () => {
    // const [scope, animate] = useAnimate();
    // const textAnimation = async () => {
    //   await animate("li", { opacity: 0 }, { delay: 0.5 });

    //   const blueTextFadeInAnimation = async () => {
    //     animate("li", { opacity: 1 }, { delay: stagger(0.5), duration: 0 });
    //     animate(
    //       "li",
    //       { color: "rgb(0, 0, 255)" },
    //       {
    //         delay: stagger(1.1),
    //         duration: 0,
    //       }
    //     );
    //   };

    //   await blueTextFadeInAnimation();
    // };

    // useEffect(() => {
    //   textAnimation();
    // });
    return (
        <>
            <img
                src="UntitledExtraSmall.png"
                className="home-icon"
                alt="Icon to go back to top"
            />
            <div className="hero-container">
                <div className="logo-mask">
                    <video loop muted autoPlay className="video">
                        <source
                            src="https://livefiredev.com/wp-content/uploads/2022/09/size_reduced_fire_bg_video.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="footer">
                    <p style={{ placeSelf: "start" }}>SOFTWARE ENGINEER</p>
                    <p style={{ paddingRight: "15rem" }}>ASHAN PANDUWAWALA</p>
                    <p style={{ placeSelf: "end" }}>PORTFOLIO 2023</p>
                </div>
            </div>
        </>
    );
};
