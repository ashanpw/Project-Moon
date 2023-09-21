import { TextData } from "../../text/TextData";
import { TwoColumn, StyledH1, H1Container, Table } from "./Stats.styles";

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
    <div>
      <H1Container>
        <StyledH1>PROJECT MOON PROJECT MOON PROJECT MOON</StyledH1>
      </H1Container>

      <TwoColumn>
        <Table>{details}</Table>
        <div>
          <img src="https://fastly.picsum.photos/id/675/400/500.jpg?hmac=2X5NSSStMEerYxgHCfn6vHVAbWFT2X8bbn36EsQvl0Y" width="100%" alt="hi" />
        </div>
      </TwoColumn>
    </div>
  );
};
