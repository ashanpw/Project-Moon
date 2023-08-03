import styled from "styled-components/macro";

export const Grid = styled.div`
  display: grid;
  max-width: 160rem;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, minmax(30rem, auto));
  gap: 1rem;
  background-color: #101010;
  padding: 10rem 15rem;
  border-radius: 0.8rem;
  margin-bottom: 10rem;
  color: white;

  grid-template-areas:
    "pc-setup-img  pc-setup-img"
    "player-card   player-card"
    "years-of-exp  project-moon"
    "hobbies       hobbies";

  @media (min-width: 50em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "pc-setup-img pc-setup-img hobbies"
      "years-of-exp player-card  hobbies"
      ".            player-card  project-moon";
  }
`;

//     background: ${ColorTokens.light.background};
export const GridItem = styled.div<{ gridArea: string }>`
  grid-area: ${(props) => props.gridArea};
  background: #171717;
  padding: 1.5rem;
  border-radius: 3.2rem;
  text-align: center;
`;
