import "styled-components";
import { ColorType, MediaType, FontType } from "../theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorType;
    media: MediaType;
    font: FontType;
  }
}
