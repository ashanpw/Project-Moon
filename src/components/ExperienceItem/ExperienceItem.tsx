import { ColorTokens } from "../../colors/ColorTokens";
import { TextItem } from "../TextItem/TextItem";
import { TwoColumnWrapper } from "./ExperienceItem.styles";

export const ExperienceItem = () => {
  return (
    <TwoColumnWrapper>
      <img
        src="https://fastly.picsum.photos/id/675/400/500.jpg?hmac=2X5NSSStMEerYxgHCfn6vHVAbWFT2X8bbn36EsQvl0Y"
        width="100%"
      />
      <TextItem />
    </TwoColumnWrapper>
  );
};
