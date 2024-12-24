import styled from "styled-components";

interface ContainerProps {
  $leftTooltip?: boolean;
}

const Container = styled.span<ContainerProps>`
  position: absolute;
  top: calc(100% + 5px);
  ${(props) => (props.$leftTooltip ? "left" : "right")}: 0;

  display: inline-block;

  width: 60px;
  padding: 5px;

  background-color: ${(props) => props.theme.color.black};
  border-radius: 5px;

  color: ${(props) => props.theme.color.white};

  visibility: hidden;
  opacity: 0;

  transition: all 0.5s;
`;

const HoverInfoStyle = {
  Container,
};

export default HoverInfoStyle;
