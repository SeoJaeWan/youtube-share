import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;

  width: 100%;
  height: 100%;
`;

const fadeUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(5px);
    }
    
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const FadeButton = styled.div`
  opacity: 0;
  animation: ${fadeUp} 1s forwards ease 2.5s;
`;

const fadeUpGithub = keyframes`
    from {
        opacity: 0;
        transform: translate(-50%,5px);
    }
    
    to {
        opacity: 1;
        transform: translate(-50%, 0);
    }
`;

const Github = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  opacity: 0;
  animation: ${fadeUpGithub} 1s forwards ease 3s;
`;

const HomeStyle = {
  Container,
  FadeButton,
  Github,
};

export default HomeStyle;
