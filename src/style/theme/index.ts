export const color = {
  body: "#f5f5f5",
  main: "#fefffa",
  primary: "#ffa6e0",
  secondary: "#fff391",
  white: "#ffffff",
  black: "#121212",
};

export const media = {
  mobile: 767,
  tablet: 1120,
  notebook: 1680,
};

export const font = (px: number) => {
  return `${px / 16}rem`;
};

export type ColorType = typeof color;
export type MediaType = typeof media;
export type FontType = typeof font;

// rgb(26, 27, 31)
