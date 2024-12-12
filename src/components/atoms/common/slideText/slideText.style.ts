import styled, { keyframes } from "styled-components";

const slide = (parentWidth: number) => keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: ${`translateX(calc(-100% + ${parentWidth}px))`};
  }
`;

const Text = styled.span`
  position: absolute;

  display: block;

  white-space: nowrap;
`;

interface ContainerProps {
  $parentWidth: number;
}

const Container = styled.span<ContainerProps>`
  position: relative;

  display: block;

  width: 100%;
  height: 100%;

  overflow: hidden;

  ${Text}.slide {
    animation: ${(props) => slide(props.$parentWidth)} 25s linear alternate
      infinite;
  }
`;

const SlideTextStyle = {
  Container,
  Text,
};

export default SlideTextStyle;
