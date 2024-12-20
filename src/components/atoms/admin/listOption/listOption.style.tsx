import styled from "styled-components";

interface ContainerProps {
  $active?: boolean;
}

const Container = styled.button<ContainerProps>`
  & svg {
    opacity: ${(props) => (props.$active ? 1 : 0.6)};
  }

  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;

  background-color: ${(props) => props.theme.color.primaryBlue};
  border-radius: 50%;

  padding-left: 0.9px;
  padding-bottom: 1px;
`;

const ListOptionStyle = {
  Container,
};

export default ListOptionStyle;
