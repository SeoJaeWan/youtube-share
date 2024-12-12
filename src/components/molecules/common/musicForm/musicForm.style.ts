import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  gap: 20px;

  width: 100%;
  height: 100%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  width: 100%;

  font-size: ${(props) => props.theme.font(20)};
  font-weight: 700;

  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;

  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.font(24)};

  padding: 5px;

  &:focus {
    outline: none;
  }
`;

const MusicFormStyle = {
  Container,
  Label,
  Input,
};

export default MusicFormStyle;
