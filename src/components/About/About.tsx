import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./About.scss";

export const About = () => {
  return (
    <>
      <SectionTitle>ABOUT</SectionTitle>
      <div className="about-two-column">
        <img src="pfpE.png" width="100%" alt="hi" />
        <div className="text-content-container">
          <h3>
            <strong>ASHAN</strong>
          </h3>
          <div className="stats-row">
            <img src="US_flag_icon.png" alt="" className="flag-icon" />
            <p>SDE</p>
            <p>3 YOE</p>
            <p>Virginia</p>
            <p>--</p>
            <p>USA</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            quisquam iste ratione architecto illum suscipit autem sequi dolor.
            Quod itaque voluptatibus error dolorem corporis fugit fugiat, natus
            nemo iure. Accusantium.
          </p>
        </div>
      </div>
    </>
  );
};
