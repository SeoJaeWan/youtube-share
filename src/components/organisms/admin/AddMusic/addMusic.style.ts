import styled from "styled-components";

interface InputFormProps {
  $showInput: boolean;
}

const InputForm = styled.div<InputFormProps>`
  position: absolute;
  top: -10px;
  right: 0;
  transform: translateY(-100%);

  max-width: 400px;

  visibility: ${(props) => (props.$showInput ? "visible" : "hidden")};

  padding: 30px 20px;

  background-color: ${(props) => props.theme.color.white};
  border: 2px solid ${(props) => props.theme.color.primary};
  border-radius: 10px;
`;

const Container = styled.div`
  position: absolute;

  &.reverseY {
    ${InputForm} {
      transform: translateY(100%);
      top: auto;
      bottom: -10px;
    }
  }

  &.reverseX {
    ${InputForm} {
      right: auto;
      left: 0;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  background-color: ${(props) => props.theme.color.primary};
  border-radius: 50%;

  color: ${(props) => props.theme.color.white};
`;

const AddMusicStyle = {
  Container,
  Button,
  InputForm,
};

export default AddMusicStyle;
