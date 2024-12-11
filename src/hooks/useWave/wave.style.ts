import styled, { keyframes } from "styled-components";

const waveStart = keyframes`
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
`;

const waveEnd = keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(100%);
    }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;
  height: 100%;

  background-color: red;
  transform: translateY(100%);

  &.wave-start {
    animation: ${waveStart} 2s forwards;
  }

  &.wave-end {
    transform: translateY(0);
    animation: ${waveEnd} 2s forwards;
  }
`;

const WaveStyle = {
  Container,
};

export default WaveStyle;
