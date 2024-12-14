import styled from "styled-components";

interface StateBarProps {
  $percent: number;
}

const StateBar = styled.svg<StateBarProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;

  .button {
    circle {
      fill: ${(props) => props.theme.color.primaryBlue};

      stroke-width: 2;
    }

    rect,
    path {
      transition: all 0.4s;
      fill: ${(props) => props.theme.color.white};
    }
  }

  .state {
    stroke: ${(props) => props.theme.color.white};
    stroke-width: 4;
    stroke-dasharray: 408;
    stroke-dashoffset: ${(props) => 408 - 408 * props.$percent};

    fill: none;

    transform-origin: center;
    transform: rotate(-90deg);
  }

  .show {
    opacity: 1;
  }

  .hidden {
    opacity: 0;
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

  transform-origin: center;
  transition: all 0.2s;

  &:active {
    transform: scale(0.9);
  }
`;

const PlayStyle = {
  Container,
  StateBar,
};

export default PlayStyle;
