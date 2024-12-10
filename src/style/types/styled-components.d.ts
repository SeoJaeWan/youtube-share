import "styled-components";
import { ColorType, MediaType } from "../theme";

declare module "styled-components" {
  export interface DefaultTheme {
    color: ColorType;
    media: MediaType;
  }
}
