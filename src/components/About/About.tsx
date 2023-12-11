import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./About.scss";

export const About = () => {
    return (
        <>
            <SectionTitle>ABOUT</SectionTitle>
            <div className="about-two-column global-margin">
                <img src="PfpBlackBGShort2.jpg" width="100%" alt="hi" />
                <div className="text-content-container">
                    <h2>
                        <strong>ASHAN</strong>
                    </h2>
                    <div className="stats-row font-light-tertiary">
                        <img
                            src="US_flag_icon.png"
                            alt=""
                            className="flag-icon"
                        />
                        <p>SDE</p>
                        <p>3 YOE</p>
                        <p>Virginia</p>
                        <p>--</p>
                        <p>USA</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eligendi quisquam iste ratione architecto illum
                        suscipit autem sequi dolor. Quod itaque voluptatibus
                        error dolorem corporis fugit fugiat, natus nemo iure.
                        Accusantium.
                    </p>
                </div>
            </div>
        </>
    );
};
