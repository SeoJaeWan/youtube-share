import styled from "styled-components";

interface ContainerProps {
  $active?: boolean;
}

const Container = styled.li<ContainerProps>`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 20px 15px;

  background-color: ${(props) => props.theme.color.third};
  border-bottom: 1px solid ${(props) => props.theme.color.secondary};

  opacity: ${(props) => (props.$active ? 1 : 0.5)};
`;

const Title = styled.h2`
  flex-grow: 1;

  height: 21px;

  font-size: ${(props) => props.theme.font(20)};
  color: ${(props) => props.theme.color.black};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};

  border-radius: 50%;

  transition: all 0.4s;

  &:active {
    transform: scale(0.9);
  }
`;

const ItemStyle = {
  Container,
  Title,
  Button,
};

export default ItemStyle;
