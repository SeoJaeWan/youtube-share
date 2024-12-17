import styled, { keyframes } from "styled-components";

const Message = styled.p`
  width: 100%;

  font-size: ${(props) => props.theme.font(16)};
  font-weight: 500;
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
  width: 50px;
  height: 30px;

  border: 1px solid ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 10px;

  font-size: ${(props) => props.theme.font(16)};
  font-weight: 600;
  color: ${(props) => props.theme.color.primary};
`;

const ConfirmButton = styled.button`
  width: 50px;
  height: 30px;

  border: none;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;

  font-size: ${(props) => props.theme.font(16)};
  font-weight: 600;
  color: ${(props) => props.theme.color.white};
`;

const show = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
  }
  5% {
    opacity: 1;
    transform: translateX(-50%) scale(1.2);
  }
  10% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) scale(1);
  }
`;

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) scale(0.5);
  z-index: 9999;

  width: 200px;

  padding: 15px;

  background-color: ${(props) => props.theme.color.primary};
  border-radius: 10px;

  animation: ${show} 3s linear forwards;

  ${Message} {
    margin-bottom: 0;

    color: ${(props) => props.theme.color.white};
    text-align: center;
  }
`;

const AlertContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);

  min-width: 540px;

  padding: 20px 15px 15px;

  background-color: ${(props) => props.theme.color.white};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.color.primary};

  @media (max-width: ${(props) => props.theme.media.mobile}) {
    width: 80%;
    min-width: auto;
  }
`;

const AlertStyle = {
  NotificationContainer,
  AlertContainer,
  Message,
  ButtonBox,
  CancelButton,
  ConfirmButton,
};

export default AlertStyle;
