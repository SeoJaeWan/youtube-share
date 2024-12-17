import styled from "styled-components";

interface ContainerProps {
  $active?: boolean;
}

const Container = styled.button<ContainerProps>`
  opacity: ${(props) => (props.$active ? 1 : 0.6)};

  img {
    fill: ${(props) => props.theme.color.white};
  }
`;

const ListOptionStyle = {
  Container,
};

export default ListOptionStyle;
