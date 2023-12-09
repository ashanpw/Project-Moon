import { TextData } from "../../text/TextData";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import "../../colors/ColorTokens.scss";
import "./Stats.scss";

export const Stats = () => {
  // TODO: Use color tokens here
  const details = TextData.about.details.map((data, idx) => {
    return (
      <div key={idx}>
        <strong className="font-light-tertiary">{data.header}</strong>
        <p>{data.value}</p>
      </div>
    );
  });
  return (
    <>
      <SectionTitle>STATS</SectionTitle>
      <div className="two-column">
        <div className="img-container">
          <img src="./UntitledMedium.png" alt="hi" />
        </div>
        <div className="stats-vertical-line" />
        <div>
          <div className="table">{details}</div>
        </div>
      </div>
    </>
  );
};
