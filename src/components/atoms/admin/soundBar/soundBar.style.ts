import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

interface InputProps {
  $trackBackground: string;
}

const Input = styled.input<InputProps>`
  width: 100%;
  height: 12px;

  max-width: 150px;

  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: ${(props) => props.$trackBackground};
  }

  &::-webkit-slider-thumb {
    appearance: none;
    -webkit-appearance: none;

    width: 16px;
    height: 16px;

    background-color: ${(props) => props.theme.color.white};

    border-radius: 50%;

    margin-top: -7px;
  }
`;

const SoundBarStyle = {
  Container,
  Input,
};

export default SoundBarStyle;
