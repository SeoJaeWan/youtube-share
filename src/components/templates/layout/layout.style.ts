import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  max-width: 600px;
  height: 100vh;

  overflow: hidden;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.color.main};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

const LayoutStyle = {
  Container,
};

export default LayoutStyle;
