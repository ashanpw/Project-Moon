import { TextData } from "../../text/TextData";
import { StyledH3, StyledHeader, StyledImg, Table, TwoColumn } from "./Stats.styles";

export const Stats = () => {
  const details = TextData.about.details.map((data, idx) => {
    return (
      <div key={idx}>
        <strong>{data.header}</strong>
        <p>{data.value}</p>
      </div>
    );
  });
  return (
      <TwoColumn>
        <StyledImg src="https://ashanpw-asset-bucket.s3.amazonaws.com/MoonWithMountains.png" width="100%" alt="hi" />
        <div>
          <StyledH3>STATS</StyledH3>
          <Table>{details}</Table>
        </div>
      </TwoColumn>
  );
};
