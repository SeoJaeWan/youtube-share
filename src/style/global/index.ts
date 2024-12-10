import * as styled from "styled-components";

const Global = styled.createGlobalStyle`
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    user-select: none;

    background-color: ${({ theme }) => theme.color.body};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  button {
    border: none;
    outline: none;
    background: none;

    cursor: pointer;

    &:disabled {
      transform: none;
      cursor: default;
    }
  }
`;

export default Global;
