import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 25px;

  background-color: ${(props) => props.theme.color.secondary};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

const PlayingBox = styled.div``;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftController = styled.div`
  flex-grow: 1;
`;

const MusicTitle = styled.h1`
  font-size: ${(props) => props.theme.font(30)};
  font-weight: 600;

  color: ${(props) => props.theme.color.black};
`;

const ControllerStyle = {
  Container,
  PlayingBox,
  InfoBox,
  MusicTitle,
  LeftController,
};

export default ControllerStyle;
