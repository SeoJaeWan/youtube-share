import styled, { keyframes } from "styled-components";

interface ContainerProps {
  $effect?: boolean;
}

const Container = styled.div<ContainerProps>`
  position: relative;

  &:hover > span {
    display: ${(props) => (props.$effect ? "block" : "none")};
  }
`;

interface EffectProps {
  $delay: number;
}

const effect = keyframes`
    from {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(1.4);
        opacity: 0;
    }
`;

const Effect = styled.span<EffectProps>`
  position: absolute;
  top: 0;
  left: 0;

  display: none;

  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;

  width: 100%;
  height: 100%;

  animation: ${effect} 1.5s linear forwards infinite ${(props) => props.$delay}s;
`;

const Button = styled.button`
  position: relative;
  z-index: 1;

  padding: 8px 16px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;

  color: white;
  font-size: ${(props) => props.theme.font(20)};

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    font-size: ${(props) => props.theme.font(16)};
  }
`;

const ButtonStyle = {
  Container,
  Effect,
  Button,
};

export default ButtonStyle;
