import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 80%;

  margin: 0 auto;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
  `;

const fadeRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  
  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
  `;

const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
  `;

const pEyeMove = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(0);
  }
  `;

const fadeRotate3DUp = keyframes`
  from {
    opacity: 0;
    transform: perspective(300px) rotateX(-180deg) rotateY(-30deg);
  }

  to {
    opacity: 1;
    transform: perspective(300px) rotateX(0) rotateY(0);
  }
  `;

const popR1 = keyframes`
    0% {
      opacity: 0;
      transform: translate(10px, 10px);
    };

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(0);
    }
  `;

const popR2 = keyframes`
    0% {
      opacity: 0;
      transform: translate(-10px, 10px);
    };

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(5px, 0px);
    }
  `;

const Svg = styled.svg`
  .cls-1 {
    fill: #fff;
    stroke: #000;
  }

  .cls-1,
  .cls-2,
  .cls-3,
  .cls-4 {
    stroke-miterlimit: 10;
  }

  .cls-2 {
    fill: #feffed;
  }

  .cls-2,
  .cls-3,
  .cls-4 {
    stroke: #f387c1;
    stroke-width: 0.5px;
  }

  .cls-3 {
    fill: #fff391;
  }

  .cls-4 {
    fill: #ffa6e0;
  }

  .cls-5 {
    fill: none;
  }

  & > * {
    transform-origin: center;
    transform-box: fill-box;

    opacity: 0;
  }

  .h {
    animation: ${fadeIn} 0.5s ease-in-out forwards;
  }

  .m {
    animation: ${fadeIn} 0.6s ease-in-out 0.2s forwards;
  }

  .t,
  .u {
    animation: ${fadeIn} 0.8s ease-in-out 0.4s forwards;
  }

  .r {
    animation: ${fadeRight} 0.9s ease-in-out 0.5s forwards;
  }

  .r-m-1 {
    animation: ${popR1} 1s linear 1s forwards;
  }

  .r-m-2 {
    animation: ${popR2} 1s linear 1s forwards;
  }

  .r-eyes {
    animation: ${pEyeMove} 0.8s ease-in-out 1.2s forwards;
  }

  .y {
    animation: ${fadeDown} 1s ease-in-out 1.2s forwards;
  }

  .p {
    animation: ${fadeDown} 0.8s ease-in-out 1s forwards;
  }

  .color-h {
    transform-origin: bottom;
    animation: ${fadeRotate3DUp} 1s ease-in-out 1.2s forwards;
  }
`;

const LogoStyle = {
  Container,
  Svg,
};

export default LogoStyle;
