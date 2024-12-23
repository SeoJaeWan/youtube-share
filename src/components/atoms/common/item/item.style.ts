import styled, { keyframes } from "styled-components";

interface ContainerProps {
  $delay: number;
  $duration: number;
}

const show = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
 }
`;

const hide = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(50%);
    opacity: 0;
  }
`;

const Container = styled.li<ContainerProps>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 20px 15px;

  background-color: ${(props) => props.theme.color.white};
  border-bottom: 1px solid ${(props) => props.theme.color.gray};

  animation-duration: ${(props) => props.$duration}ms;
  animation-delay: ${(props) => props.$delay}ms;
  animation-fill-mode: forwards;

  &.show {
    transform: translateY(-50%);
    opacity: 0;
    animation-name: ${show};
  }

  &.hide {
    transform: translateX(0);
    opacity: 1;
    animation-name: ${hide};
  }
`;

const Title = styled.h2`
  flex-grow: 1;

  height: 24px;

  font-size: ${(props) => props.theme.font(18)};
  font-weight: 500;
  color: ${(props) => props.theme.color.black};
`;

interface ButtonProps {
  $active?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background-color: ${(props) =>
    props.$active ? props.theme.color.primary : props.theme.color.white};
  color: ${(props) => props.theme.color.white};
  border: 1px solid
    ${(props) =>
      props.$active ? props.theme.color.primary : props.theme.color.gray};

  border-radius: 50%;

  &:last-of-type {
    padding-left: 1px;
  }
`;

const ItemStyle = {
  Container,
  Title,
  Button,
};

export default ItemStyle;
