import styled, { keyframes } from "styled-components";

const waveStart = keyframes`
    from {
        transform: translateY(120%);
    }


    to {
        transform: translateY(0%);
    }
`;

const waveEnd = keyframes`
    from {
        transform: translateY(0%);
    }


    to {
        transform: translateY(120%);
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;
  height: 100vh;

  transform: translateY(120%);

  &.wave-start {
    animation: ${waveStart} 4s linear forwards;
  }

  &.wave-end {
    transform: translateY(0%);
    animation: ${waveEnd} 4s linear forwards;
  }
`;

const waveMove = keyframes`
  0% {
   transform: translateX(-90px);
  }
  100% { 
    transform: translateX(85px);
  }
`;

const Wave = styled.svg`
  position: absolute;
  top: 2px;
  left: 0;
  transform: translateY(-100%);

  use {
    animation: ${waveMove} 2s linear infinite;
    fill: ${({ theme }) => theme.color.primary};
  }

  use:nth-child(1) {
    opacity: 0.8;
    animation-delay: -2s;
    animation-duration: 8s;

    fill: ${({ theme }) => theme.color.secondary};
  }

  use:nth-child(2) {
    opacity: 0.6;
    animation-delay: -3s;
    animation-duration: 6s;
  }

  use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 3s;

    fill: ${({ theme }) => theme.color.secondary};
  }

  use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 3s;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.color.primary};
`;

const WaveStyle = {
  Wave,
  Container,
  Box,
};

export default WaveStyle;
