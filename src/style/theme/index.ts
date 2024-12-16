export const color = {
  body: "#f5f5f5",
  main: "#fefffa",
  primary: "#ffa6e0",
  secondary: "#fff391",
  third: "#FEFFED",
  fourth: "#f387c1",
  primaryBlue: "#FEBAE4",
  white: "#ffffff",
  black: "#121212",
  gray: "#bdc3c7",
  red: "#eb4d4b",
};

export const media = {
  mobile: "767px",
  tablet: "1120px",
  notebook: "1680px",
};

export const font = (px: number) => {
  return `${px / 16}rem`;
};

export type ColorType = typeof color;
export type MediaType = typeof media;
export type FontType = typeof font;
