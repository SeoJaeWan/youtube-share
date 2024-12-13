import styled, { keyframes } from "styled-components";

interface ContainerProps {
  $opacityDelay: number;
}

const hide = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Container = styled.ul<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  overflow-y: auto;

  opacity: 1;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &.hide {
    animation: ${hide} 0.5s forwards ${(props) => props.$opacityDelay}ms;
  }
`;

const ListStyle = {
  Container,
};

export default ListStyle;
