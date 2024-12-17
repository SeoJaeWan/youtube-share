import styled from "styled-components";

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;
  border-radius: 50%;

  background-color: ${(props) => props.theme.color.primaryBlue};
`;

const TrackControllerStyle = {
  Container,
};

export default TrackControllerStyle;
