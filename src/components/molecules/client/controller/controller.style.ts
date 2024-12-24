import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  height: 100%;

  padding: 0 15px;

  background-color: ${(props) => props.theme.color.primary};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  flex: 1;

  height: 36px;

  font-size: ${(props) => props.theme.font(30)};
  font-weight: 600;

  color: ${(props) => props.theme.color.white};

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    font-size: ${(props) => props.theme.font(24)};
    height: 29px;
  }
`;

const ControllerStyle = {
  Container,
  Title,
};

export default ControllerStyle;
