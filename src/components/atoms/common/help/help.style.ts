import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 500px;

  background-color: ${(props) => props.theme.color.white};
  border: 3px solid ${(props) => props.theme.color.black};
  border-radius: 15px;

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    width: 90%;
    height: auto;

    aspect-ratio: 1;

    img {
      width: 80%;
      height: auto;
      aspect-ratio: 1;
    }
  }
`;

const Close = styled.button`
  padding: 8px 16px;

  background-color: ${(props) => props.theme.color.black};
  border-radius: 5px;

  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.font(18)};

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    padding: 4px 8px;

    font-size: ${(props) => props.theme.font(16)};
  }
`;

const Button = styled.button`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.color.gray};
  color: ${(props) => props.theme.color.white};
`;

const HelpStyle = {
  Modal,
  Close,
  Button,
};

export default HelpStyle;
