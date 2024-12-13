import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 540px;

  padding: 15px;

  background-color: ${(props) => props.theme.color.white};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.color.primary};

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    width: 80%;
  }
`;

const Message = styled.p`
  width: 100%;

  font-size: ${(props) => props.theme.font(18)};
  font-weight: 600;
  color: ${(props) => props.theme.color.black};

  white-space: pre-wrap;

  margin-bottom: 20px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;

const CancelButton = styled.button`
  width: 60px;
  height: 40px;

  border: 1px solid ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 10px;

  font-size: ${(props) => props.theme.font(16)};
  font-weight: 600;
  color: ${(props) => props.theme.color.primary};
`;

const ConfirmButton = styled.button`
  width: 60px;
  height: 40px;

  border: none;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;

  font-size: ${(props) => props.theme.font(16)};
  font-weight: 600;
  color: ${(props) => props.theme.color.white};
`;

const AlertStyle = {
  Container,
  Message,
  ButtonBox,
  CancelButton,
  ConfirmButton,
};

export default AlertStyle;
