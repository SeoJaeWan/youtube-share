"use client";

import { PropsWithChildren } from "react";
import { color, media, font } from "../theme";
import { ThemeProvider } from "styled-components";

const Theme = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <ThemeProvider theme={{ color, media, font }}>{children}</ThemeProvider>
  );
};

export default Theme;
