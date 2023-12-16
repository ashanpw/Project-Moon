import { useEffect } from "react";
import "./Hero.scss";
import { stagger, useAnimate } from "framer-motion";
import { TextData } from "../../text/TextData";

export const Hero = () => {
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
          {TextData.hero.headings.map((h) => (
            <p>{h}</p>
          ))}
        </div>
      </div>
    </>
  );
};
