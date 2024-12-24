import * as styled from "styled-components";

const Global = styled.createGlobalStyle`
  html,
  body {
  }

  body {
    position: relative;

    user-select: none;
    background-color: ${({ theme }) => theme.color.body};
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    font-family: var(--font-pretendard);
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

    transition: all 0.2s;

    cursor: pointer;

    &:disabled {
      transform: none;
      cursor: default;
    }

    &:active {
      transform: scale(0.9);
    }
  }

  #form,
  #player {
    display: none;
  }

  .tooltip {
    position: relative;

    &:hover .tooltip-info {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default Global;
