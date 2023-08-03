import {
  Card,
  Card2,
  Card3,
  CardContainer,
  StyledDiv,
  StyledP,
} from "./About.styles";

export const About = () => {
  return (
    <StyledDiv>
      <h2>ABOUT</h2>
      <CardContainer>
        <Card3 background="#000000" angle="-15" />
        <Card background="#111111" angle="0" />
        <Card2 background="#000000" angle="15" />
      </CardContainer>
      <StyledP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, rerum
        itaque voluptas recusandae corporis ab maiores vero sequi, accusantium
        laborum expedita molestiae dolorum! Alias cum corrupti ut nulla adipisci
        repellat.
      </StyledP>
    </StyledDiv>
  );
};
