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

const HomeStyle = {
  Container,
  FadeButton,
};

export default HomeStyle;
