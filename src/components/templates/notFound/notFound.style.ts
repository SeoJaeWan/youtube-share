import styled from "styled-components";

const Container = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  img {
    @media (max-width: ${(props) => props.theme.media.mobile}) {
      width: 80%;
      height: auto;
    }
  }
`;

const Content = styled.p`
  margin-top: 50px;
  margin-bottom: 20px;

  font-size: ${(props) => props.theme.font(24)};
  font-weight: bold;
  color: ${(props) => props.theme.color.gray};

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    margin-top: 20px;

    font-size: ${(props) => props.theme.font(16)};
  }
`;

const NotFoundStyle = {
  Container,
  Content,
};

export default NotFoundStyle;
