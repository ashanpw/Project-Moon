import { StyledDiv, StyledDot } from "./NavigationDots.styles";

export const Dots = (props: any) => {
  const dotList = [];

  for (let i = 0; i < props.size; i++) {
    console.log(props.selectedIdx, props.size);
    dotList.push(
      <StyledDot
        isSelected={i === props.selectedIdx}
        onClick={() => props.onClickFn(i)}
      />
    );
  }
  console.log(dotList);
  return <StyledDiv>{dotList}</StyledDiv>;
};
