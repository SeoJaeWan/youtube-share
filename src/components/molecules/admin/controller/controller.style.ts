import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 25px 15px;

  background-color: ${(props) => props.theme.color.primary};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

const TopController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlayingBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const LeftController = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const MusicTitle = styled.h1`
  width: 100%;
  height: 40px;

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
  TopController,
  PlayingBox,
  InfoBox,
  MusicTitle,
  LeftController,
};

export default ControllerStyle;
