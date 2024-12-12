import styled from "styled-components";

const StateBar = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;

  .button {
    transform-origin: center;
    transition: all 0.2s;

    circle {
      fill: ${(props) => props.theme.color.primary};
      stroke: ${(props) => props.theme.color.fourth};
      stroke-width: 2;
    }

    path {
      fill: ${(props) => props.theme.color.white};
    }
  }

  .bg {
    stroke: ${(props) => props.theme.color.primary};
    fill: ${(props) => props.theme.color.primary};

    stroke-width: 10;
    opacity: 0.5;
  }

  .state {
    stroke: ${(props) => props.theme.color.primary};
    stroke-width: 24;
    stroke-dasharray: 408;
    stroke-dashoffset: 205;

    fill: none;

    transform-origin: center;
    transform: rotate(-90deg);
  }
`;

const Container = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;

  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.color.fourth};

  &:active {
    .button {
      transform: scale(0.9);
    }
  }
`;

const PlayStyle = {
  Container,
  StateBar,
};

export default PlayStyle;
