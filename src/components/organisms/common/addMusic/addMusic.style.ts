import styled, { keyframes } from "styled-components";

interface ContainerProps {
  $delay: number;
  $duration: number;
}

const show = keyframes`
    from {
        opacity: 0;
    }
    
    to {
        visibility: visible;
        opacity: 1;
    }
`;

const hide = keyframes`
    from {
        opacity: 1;
    }
    
    to {
        visibility: hidden;
        opacity: 0;
    }
`;

const Container = styled.div<ContainerProps>`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  padding: 0 50px;

  background-color: white;

  animation-duration: ${(props) => props.$duration}ms;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.$delay}ms;

  &.show {
    opacity: 0;
    animation-name: ${show};
  }

  &.hide {
    opacity: 1;
    animation-name: ${hide};
  }

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    padding: 0 20px;
  }
`;

const AddMusicStyle = {
  Container,
};

export default AddMusicStyle;
