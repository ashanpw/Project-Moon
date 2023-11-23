import { TextData } from "../../text/TextData";
import {
  GridItem,
  StyledDiv,
  StyledH4,
  StyledLi,
  StyledUl,
} from "./Tech.styles";
import { LunarTextRing } from "./components/LunarTextRing/LunarTextRing";

export const Tech = () => {
  const gridAreas = ["frontend", "backend", "cloud", "mlai"];
  const techItemList = TextData.tech.map((t, idx) => {
    return (
      <GridItem area={gridAreas[idx]}>
        <StyledH4>{t.title}</StyledH4>
        <StyledUl>
          {t.technologies.map((i) => {
            return <StyledLi>{i}</StyledLi>;
          })}
        </StyledUl>
      </GridItem>
    );
  });

  return (
    <StyledDiv>
      {techItemList[0]}
      {techItemList[1]}
      <LunarTextRing />
      {techItemList[2]}
      {techItemList[3]}
    </StyledDiv>
  );
};
